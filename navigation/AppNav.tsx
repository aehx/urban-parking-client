import React, { useContext, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { AxiosResponse } from "axios";
import { parking } from "../axios.config";
import AuthStack from "./AuthStack";
import { AuthContext } from "../context/AuthContext";
import AppStack from "./AppStack";
import { addParkings } from "../redux/reducers/parking";
import { Parking } from "../typescript/parkingType/parking.type";

const AppNav = () => {
  const { userToken, isLoading } = useContext(AuthContext);
  const dispatch = useDispatch();
  useEffect(() => {
    parking.get("/").then((response: AxiosResponse<Parking[]>) => {
      const filtered = response.data.filter(
        (parking) => parking.parkId !== "1951"
      );
      dispatch(addParkings(filtered));
    });
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
