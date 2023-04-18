import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  addParkingList,
  addParkingSelected,
  addPopUpParking,
} from "../redux/reducers/parking";
import SettingStack from "./SettingStack";
import HomeStack from "./HomeStack";
import FavoriteStack from "./FavoriteStack";
import { BottomTabParamList } from "../typescript/navigation/navigation.types";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const AppStack = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addParkingSelected(null)),
      dispatch(addParkingList(null)),
      dispatch(addPopUpParking(null));
  }, []);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#0B131D" },
        tabBarInactiveTintColor: "#fff",
        tabBarActiveTintColor: "#2795FF",
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={() => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="favorites"
        component={FavoriteStack}
        options={() => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="settings"
        component={SettingStack}
        options={() => ({
          tabBarStyle: {
            backgroundColor: "#0B131D",
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-settings-outline" color={color} size={size} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};
export default AppStack;
