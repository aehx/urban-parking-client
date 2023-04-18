import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthStackParamList } from "../typescript/navigation/navigation.types";
import LoginScreen from "../screen/LoginScreen";
import RegisterScreen from "../screen/RegisterScreen";

const Auth_Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Auth_Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Login"
    >
      <Auth_Stack.Screen name="Login" component={LoginScreen} />
      <Auth_Stack.Screen name="Register" component={RegisterScreen} />
    </Auth_Stack.Navigator>
  );
};

export default AuthStack;
