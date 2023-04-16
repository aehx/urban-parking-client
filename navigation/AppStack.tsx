import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MapScreen from "../screen/MapScreen";
import SettingStack from "./SettingStack";

import FavoriteScreen from "../screen/FavoriteScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ParkingListScreen from "../screen/ParkingListScreen";
import ParkingInformationScreen from "../screen/ParkingInformationScreen";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Map"
    >
      <Stack.Screen name="Map" component={MapScreen} />
      <Stack.Screen name="ParkingList" component={ParkingListScreen} />
      <Stack.Screen
        name="ParkingInformation"
        component={ParkingInformationScreen}
      />
    </Stack.Navigator>
  );
};

const AppStack = () => {
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
        component={FavoriteScreen}
        options={() => ({
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        })}
      />
      <Tab.Screen
        name="settings"
        component={SettingStack}
        options={({ route }) => ({
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
