import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from "react-native";
import {styles} from "../style/screen/ParkingInformationScreen"
import { useSelector, useDispatch } from "react-redux";
import React, { useContext } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { addFavoritesParking } from "../redux/reducers/parking";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { pinStyle } from "../utils/mapview.utils";
import { AuthContext } from "../context/AuthContext";
import { parking } from "../axios.config";

const ParkingInformationScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const {parkings} = useSelector((state)=> state.parking.value)
  const {userToken,userInfo} = useContext(AuthContext);
  const { parkingSelected,favoritesParking } = useSelector((state) => state.parking.value);
  const userFavorites = favoritesParking.length > 0 ? favoritesParking.filter((el)=>el.name === parkingSelected.name ):[];
  const updateFavorite = async () => {
    const response = await parking.put("/favorites",{ token: userToken,parkingName:parkingSelected.name },
    {
      headers: { "authorization": "Bearer " + userToken },
    });
    const axiosResult = await parking.get(`userFavorites/${userInfo.email}`);
    const favoriteParking = parkings.filter((parking)=>  axiosResult.data.some((el)=>el === parking.name));
    dispatch(addFavoritesParking(favoriteParking));
}
console.log(userFavorites)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back-outline"
          color="#ddd"
          size={30}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <Text style={[styles.text, styles.title]}>{parkingSelected.name}</Text>
      <MapView
        style={styles.map}
        provider="google"
        region={{
          latitude: parkingSelected.latitude,
          longitude: parkingSelected.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <Marker
          coordinate={{
            latitude: parkingSelected.latitude,
            longitude: parkingSelected.longitude,
          }}
          pinColor={pinStyle(parkingSelected.dispo)}
        />
      </MapView>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { marginBottom: 10 }]}>
          Places disponibles : {parkingSelected.dispo}
        </Text>
        {parkingSelected.distanceBetweenUserAndParking && (
          <Text style={[styles.text, { color: "#2795FF" }]}>
            À {parkingSelected.distanceBetweenUserAndParking.toFixed(0)} km
          </Text>
        )}
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() =>
            Linking.openURL(
              `https://www.google.com/maps/search/?api=1&query=${
                parkingSelected.name.toLowerCase().includes("parking")
                  ? parkingSelected.name
                  : "parking " + parkingSelected.name
              }`
            )
          }
        >
          <Icon
            name="directions"
            size={55}
            style={styles.iconFav_Heart}
          />
          <Text style={styles.text}>Y aller</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={()=>updateFavorite()}>
          <Icon
            name={ userFavorites.length === 0 ? "heart-plus" : "heart-minus"}
            size={50}
            style={styles.iconFav_Heart}
          /> 
           <Text style={styles.text}>{userFavorites.length === 0 ? "Ajouter" : "Retirer"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


export default ParkingInformationScreen;
