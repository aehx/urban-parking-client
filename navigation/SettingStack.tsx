import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SettingStackParamList } from "../typescript/navigation/navigation.types";
import SettingScreen from "../screen/SettingScreen";
import FavoriteScreen from "../screen/FavoriteScreen";

const Setting_Stack = createNativeStackNavigator<SettingStackParamList>();

const SettingStack = () => {
  return (
    <Setting_Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Settings"
    >
      <Setting_Stack.Screen name="Settings" component={SettingScreen} />
      <Setting_Stack.Screen name="Favorites" component={FavoriteScreen} />
    </Setting_Stack.Navigator>
  );
};

export default SettingStack;
