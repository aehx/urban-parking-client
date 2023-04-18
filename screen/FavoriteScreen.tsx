import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { styles } from "../style/screen/FavoriteScreen";
import getFavoritesParking from "../hooks/getFavoritesParking";
import ParkingListCard from "../components/ParkingListCard";
import { addParkingSelected } from "../redux/reducers/parking";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FavoriteStackParamList } from "../typescript/navigation/navigation.types";
import { RootState } from "../redux/store";
import { Parking } from "../typescript/parkingType/parking.type";

type ParkingListScreenProps = {
  navigation: NativeStackScreenProps<
    FavoriteStackParamList,
    "Favorites"
  >["navigation"];
};
const FavoriteScreen = ({ navigation }: ParkingListScreenProps) => {
  const dispatch = useDispatch();
  const { favoritesParking } = useSelector((state: RootState) => state.parking);
  getFavoritesParking();
  if (favoritesParking.length == 0) {
    return (
      <SafeAreaView style={[styles.container, { justifyContent: "center" }]}>
        <Text style={{ color: "#ddd" }}>Aucun favoris</Text>
      </SafeAreaView>
    );
  }
  const userFavoritesParking: Parking[] = Array.from(
    new Set(favoritesParking.map((item) => JSON.stringify(item)))
  ).map((item) => JSON.parse(item));
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back-outline"
          color="#ddd"
          size={30}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.test}>
        <FlatList
          data={userFavoritesParking}
          renderItem={({ item }) => {
            return (
              <ParkingListCard
                {...item}
                getParkingData={(parking) => {
                  dispatch(addParkingSelected(parking)),
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
