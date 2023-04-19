import React, { createContext, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import jwtDecode from "jwt-decode";
import { auth, user } from "../axios.config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  UserContextType,
  UserData,
  UserInfo,
  userContextProviderType,
  Body,
  JwtTokenType,
  AxiosError,
} from "../typescript/context/AuthContext";

export const AuthContext = createContext({} as UserContextType);

export const AuthProvider = ({ children }: userContextProviderType) => {
  const [userToken, setUserToken] = useState<null | string>(null);
  const [userInfo, setUserInfo] = useState<null | UserInfo>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loginError,setLoginError] = useState<null|string>(null)
  const [registerError,setRegisterError] = useState<null|string>(null)

  const login = async (email = "", password = "") => {
    try {
      setIsLoading(true);
      const result: AxiosResponse<UserData|AxiosError> = await user.post("/login", {
        email,
        password,
      });
      if('error' in result.data){
        setLoginError(result.data.error);
        setIsLoading(false);
        return;
      }
      let token = result.data.token;
      let userInfo: UserInfo = {
        username: result.data.username,
        favorites: result.data.favorites,
        email: result.data.email,
      };
      setUserToken(token);
      setUserInfo(userInfo);
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      setLoginError(null);
      setIsLoading(false);
    } catch (e) {
      console.log("-----error", e);
    }
  };

  const signup = async (body: Body) => {
    try {
      setIsLoading(true);
      const result: AxiosResponse<UserData|AxiosError> = await user.post("/signup", body);
      if('error' in result.data){
        setRegisterError(result.data.error);
        setIsLoading(false);
        return;
      }
      let token = result.data.token;
      let userInfo: UserInfo = {
        username: result.data.username,
        favorites: result.data.favorites,
        email: result.data.email,
      };
      setUserToken(token);
      setUserInfo(userInfo);
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      setRegisterError(null);
      setIsLoading(false);
    } catch (e) {
      console.log("-----error", e);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    await axios.post(
      "https://urban-parking-server.vercel.app/auth/signout",
      { token: userToken },
      {
        headers: { "authorization": "Bearer " + userToken },
      }
    );
    setUserToken(null);
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("userInfo");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("token");
      let userInfoFromStorage: string | null = await AsyncStorage.getItem(
        "userInfo"
      );
      let userInfo: UserInfo | null = JSON.parse(userInfoFromStorage as string);
      if (userInfo) {
        const token: JwtTokenType | null = jwtDecode(userToken as string);
        const currentTime = Math.floor(Date.now() / 1000);
        if (token && token?.exp < currentTime) {
          await auth.put("/removeToken", { email: userInfo.email });
          AsyncStorage.removeItem("token");
          AsyncStorage.removeItem("userInfo");
          setUserToken(null);
          setUserInfo(null);
        } else {
          setUserToken(userToken);
          setUserInfo(userInfo);
        }
      }
      setIsLoading(false);
    } catch (e) {
      console.error("error", e);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{ login, logout, signup, userToken, userInfo, isLoading,loginError,registerError }}
    >
      {children}
    </AuthContext.Provider>
  );
};
