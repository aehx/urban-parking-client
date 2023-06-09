import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { styles } from "../style/screen/FavoriteScreen";
import getUserFavoritesParking from "../hooks/getUserFavoritesParking";
import ParkingListCard from "../components/ParkingListCard";
import { addParkingSelectedData } from "../redux/reducers/parking";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FavoriteStackParamList } from "../typescript/navigation/navigation.types";
import { RootState } from "../redux/store";
import { Parking } from "../typescript/parkingType/parking.type";
import { ThemeContext } from "../context/ThemeContext";

type ParkingListScreenProps = {
  navigation: NativeStackScreenProps<
    FavoriteStackParamList,
    "Favorites"
  >["navigation"];
};
const FavoriteScreen = ({ navigation }: ParkingListScreenProps) => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const { favoritesParkingData } = useSelector((state: RootState) => state.parking);
  getUserFavoritesParking();
  if (favoritesParkingData.length === 0) {
    return (
      <SafeAreaView style={[styles.container,theme.background,{ justifyContent: "center" }]}>
        <Text style={theme.primary}>Aucun favoris</Text>
      </SafeAreaView>
    );
  }

  // New table allowing to avoid duplicate parking in favorites.
  const userFavoritesParking: Parking[] = Array.from(new Set(favoritesParkingData.map((item) => JSON.stringify(item)))).map((item) => JSON.parse(item));

  return (
    <SafeAreaView style={[styles.container,theme.background]}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back-outline"
          color={theme.primary.color}
          size={30}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={[styles.flatListContainer,theme.flatList]}>
        <FlatList
          data={userFavoritesParking}
          renderItem={({ item }) => {
            return (
              <ParkingListCard
                {...item}
                getParkingData={(parking) => {
                  dispatch(addParkingSelectedData(parking)),
                    navigation.navigate("ParkingInformation");
                }}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default FavoriteScreen;
