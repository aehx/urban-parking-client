import React, { createContext, useEffect, useState } from "react";
import { auth } from "../axios.config";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

type UserContextType = {
  login: any;
  logout: any;
};

type userContextProviderType = {
  children: React.ReactNode;
};
export const AuthContext = createContext({} as UserContextType);

export const AuthProvider = ({ children }: userContextProviderType) => {
  const [userToken, setUserToken] = useState<null | string>(null);
  const [userInfo, setUserInfo] = useState<null | {
    username: string;
    favorites: string[];
  }>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = async (email = "", password = "") => {
    try {
      setIsLoading(true);
      const result = await auth.post("/login", { email, password });
      let token = result.data.token;
      let userInfo = {
        username: result.data.username,
        favorites: result.data.favorites,
      };
      setUserToken(token);
      setUserInfo(userInfo);
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      setIsLoading(false);
    } catch (e) {
      console.log("-----error", e);
    }
  };

  const signup = async (body) => {
    try {
      setIsLoading(true);
      const result = await auth.post("/signup", body);
      let token = result.data.token;
      let userInfo = {
        username: result.data.username,
        favorites: result.data.favorites,
      };
      setUserToken(token);
      setUserInfo(userInfo);
      await AsyncStorage.setItem("token", token);
      await AsyncStorage.setItem("userInfo", JSON.stringify(userInfo));
      setIsLoading(false);
    } catch (e) {
      console.log("-----error", e);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    const result = await axios.post(
      "https://urban-parking-server.vercel.app/auth/signout",
      { token: userToken },
      {
        headers: { "authorization": "Bearer " + userToken },
      }
    );
    console.log("------AUTH",result.data)
    setUserToken(null);
    AsyncStorage.removeItem("token");
    AsyncStorage.removeItem("userInfo");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem("token");
      let userInfo = await AsyncStorage.getItem("userInfo");
      userInfo = JSON.parse(userInfo);
      if (userInfo) {
        setUserToken(userToken);
        setUserInfo(userInfo);
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
      value={{ login, logout, signup, userToken, userInfo, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
