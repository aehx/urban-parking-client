import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import AuthStack from "./AuthStack";
import { AuthContext } from "../context/AuthContext";
import AppStack from "./AppStack";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addParkings } from "../redux/reducers/parking";

const AppNav = () => {
  const { userToken, isLoading } = useContext(AuthContext);
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://urban-parking-server.vercel.app/parking")
      .then((response) => {
        const filtered = response.data.filter((parking)=> parking.parkId !== "1951")
        dispatch(addParkings(filtered))});
  }, []);
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color="#2795FF" />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {!userToken ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
};

export default AppNav;
