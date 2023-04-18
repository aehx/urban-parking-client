import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FavoriteStackParamList } from "../typescript/navigation/navigation.types";
import FavoriteScreen from "../screen/FavoriteScreen";
import ParkingInformationScreen from "../screen/ParkingInformationScreen";

const Favorite_Stack = createNativeStackNavigator<FavoriteStackParamList>();

const FavoriteStack = () => {
  return (
    <Favorite_Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Favorites"
    >
      <Favorite_Stack.Screen name="Favorites" component={FavoriteScreen} />
      <Favorite_Stack.Screen
        name="ParkingInformation"
        component={ParkingInformationScreen}
      />
    </Favorite_Stack.Navigator>
  );
};

export default FavoriteStack;
