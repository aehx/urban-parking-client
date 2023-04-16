import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingScreen from "../screen/SettingScreen";
import ProfilScreen from "../screen/ProfilScreen";
import ThemeScreen from "../screen/ThemeScreen";
import FavoriteScreen from "../screen/FavoriteScreen";

const Stack = createNativeStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Settings"
    >
      <Stack.Screen name="Settings" component={SettingScreen} />
      <Stack.Screen name="Profil" component={ProfilScreen} />
      <Stack.Screen name="Favorites" component={FavoriteScreen} />
    </Stack.Navigator>
  );
};

export default SettingStack;
