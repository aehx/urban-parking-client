import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import Ionicons from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "../style/screen/ParkingInformationScreen";
import { addFavoritesParking } from "../redux/reducers/parking";
import { RootState } from "../redux/store";
import { parking } from "../axios.config";
import { pinStyle } from "../utils/mapview.utils";
import { AuthContext } from "../context/AuthContext";
import { ParkingInformationScreenProps } from "../typescript/navigation/navigation.types";
import { ThemeContext } from "../context/ThemeContext";

const ParkingInformationScreen = ({
  navigation,
}: ParkingInformationScreenProps) => {
  const dispatch = useDispatch();
  const [refresh, setRefresh] = useState<boolean>(false);
  const { parkings } = useSelector((state: RootState) => state.parking);
  const { userToken, userInfo } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  const { parkingSelected, favoritesParking } = useSelector(
    (state: RootState) => state.parking
  );
  let isFavorites = favoritesParking.length > 0
      ? favoritesParking.filter((el) => el.name === parkingSelected?.name)
      : [];

  useEffect(() => {
    setRefresh(!!refresh);
  }, [isFavorites]);

  const updateFavorite = async () => {
    await parking.put(
      "/favorites",
      { token: userToken, parkingName: parkingSelected?.name },
      {
        headers: { "authorization": "Bearer " + userToken },
      }
    );
    const axiosResult = await parking.get(`userFavorites/${userInfo?.email}`);
    isFavorites = axiosResult.data.includes(parkingSelected?.name);
    setRefresh(!!isFavorites);
    const favoriteParking = parkings.filter((parking) =>
      axiosResult.data.includes(parking.name)
    );
    dispatch(addFavoritesParking(favoriteParking));
  };
  return (
    <SafeAreaView style={[styles.container,theme.background]}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back-outline"
          color={theme.primary.color}
          size={30}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <Text style={[styles.text, styles.title,theme.primary]}>{parkingSelected?.name}</Text>
      <MapView
        style={[styles.map,{borderWidth:1}]}
        provider="google"
        region={{
          latitude: parkingSelected?.latitude as number,
          longitude: parkingSelected?.longitude as number,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <Marker
          coordinate={{
            latitude: parkingSelected?.latitude as number,
            longitude: parkingSelected?.longitude as number,
          }}
          pinColor={pinStyle(parkingSelected?.dispo ?? 0)}
        />
      </MapView>
      <View style={styles.textContainer}>
        <Text style={[styles.text, { marginBottom: 10 }]}>
          Places disponibles : {parkingSelected?.dispo}
        </Text>
        {parkingSelected?.distanceBetweenUserAndParking && (
          <Text style={[styles.text, theme.secondary]}>
            À {parkingSelected?.distanceBetweenUserAndParking.toFixed(0)} km
          </Text>
        )}
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() =>
            Linking.openURL(
              `https://www.google.com/maps/search/?api=1&query=${
                parkingSelected?.name.toLowerCase().includes("parking")
                  ? parkingSelected?.name
                  : "parking " + parkingSelected?.name
              }`
            )
          }
        >
          <Icon name="directions" size={55} style={[styles.iconFav_Heart,theme.secondary]} />
          <Text style={[styles.text,theme.primary]}>Y aller</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => updateFavorite()}>
          <Icon
            name={isFavorites.length === 0 ? "heart-plus" : "heart-minus"}
            size={50}
            style={[styles.iconFav_Heart,theme.secondary]}
          />
          <Text style={[styles.text,theme.primary]}>
            {isFavorites.length === 0 ? "Ajouter" : "Retirer"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ParkingInformationScreen;
