import { View, Text, FlatList, SafeAreaView } from "react-native";
import {styles} from "../style/screen/FavoriteScreen"
import React, { useEffect } from "react";
import getFavoritesParking from "../hooks/getFavoritesParking";
import Ionicons from "react-native-vector-icons/Ionicons";
import ParkingListCard from "../components/ParkingListCard";
import { addParkingSelected } from "../redux/reducers/parking";
import { useDispatch, useSelector } from "react-redux";

const FavoriteScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const {favoritesParking} = useSelector((state) =>state.parking.value);
  const {loading,error} = getFavoritesParking();
  useEffect(()=>{},[favoritesParking])
  if(favoritesParking.length == 0){
    return (
      <SafeAreaView style={[styles.container,{justifyContent:"center"}]}>
        <Text style={{color:"#ddd"}}>Aucun favoris</Text>
      </SafeAreaView>
    )
  }
  const userFavoritesParking = Array.from(new Set(favoritesParking.map((item) => JSON.stringify(item))))
  .map((item) => JSON.parse(item));
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
