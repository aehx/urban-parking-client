import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamList } from "../typescript/navigation/navigation.types";
import MapScreen from "../screen/MapScreen";
import ParkingListScreen from "../screen/ParkingListScreen";
import ParkingInformationScreen from "../screen/ParkingInformationScreen";

const Home_Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Home_Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Map"
    >
      <Home_Stack.Screen name="Map" component={MapScreen} />
      <Home_Stack.Screen name="ParkingList" component={ParkingListScreen} />
      <Home_Stack.Screen
        name="ParkingInformation"
        component={ParkingInformationScreen}
      />
    </Home_Stack.Navigator>
  );
};
export default HomeStack;
