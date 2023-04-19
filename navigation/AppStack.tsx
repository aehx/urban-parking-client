import React, { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  addListOfParkingsData,
  addParkingSelectedData,
  addPopUpParkingData,
} from "../redux/reducers/parking";
import SettingStack from "./SettingStack";
import HomeStack from "./HomeStack";
import FavoriteStack from "./FavoriteStack";
import { BottomTabParamList } from "../typescript/navigation/navigation.types";
import { ThemeContext } from "../context/ThemeContext";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const AppStack = () => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    dispatch(addParkingSelectedData(null)),
      dispatch(addListOfParkingsData(null)),
      dispatch(addPopUpParkingData(null));
  }, []);
  
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: theme.background,
        tabBarInactiveTintColor: theme.primary.color,
        tabBarActiveTintColor: theme.secondary.color,
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
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-settings-outline" color={color} size={size} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};
export default AppStack;
