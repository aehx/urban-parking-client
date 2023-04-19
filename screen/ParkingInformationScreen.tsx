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
import { addFavoritesParkingData } from "../redux/reducers/parking";
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
  const { allparkingsData, parkingSelectedData, favoritesParkingData } = useSelector((state: RootState) => state.parking);
  const { userToken, userInfo } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);
  let isFavorites = favoritesParkingData && favoritesParkingData.length > 0
      ? favoritesParkingData.filter((el) => el.name === parkingSelectedData?.name)
      : [];

  useEffect(() => {
    setRefresh(!!refresh);
  }, [isFavorites]);

  const updateUserFavoriteParking = async () => {
    await parking.put(
      "/favorites",
      { token: userToken, parkingName: parkingSelectedData?.name },
      {
        headers: { "authorization": "Bearer " + userToken },
      }
    );
    console.log()
    const axiosResult = await parking.get(`userFavorites/${userInfo?.email}`);
    isFavorites = axiosResult.data.includes(parkingSelectedData?.name);
    setRefresh(!!refresh);
    const updatedUserfavoriteParking = allparkingsData.filter((parking) =>
      axiosResult.data.includes(parking.name)
    );
    dispatch(addFavoritesParkingData(updatedUserfavoriteParking));
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
      <Text style={[styles.text, styles.title,theme.primary]}>{parkingSelectedData?.name}</Text>
      <MapView
        style={[styles.map,{borderWidth:1}]}
        provider="google"
        region={{
          latitude: parkingSelectedData?.latitude as number,
          longitude: parkingSelectedData?.longitude as number,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <Marker
          coordinate={{
            latitude: parkingSelectedData?.latitude as number,
            longitude: parkingSelectedData?.longitude as number,
          }}
          pinColor={pinStyle(parkingSelectedData?.dispo ?? 0)}
        />
      </MapView>
      <View style={styles.textContainer}>
        <Text style={[styles.text,theme.primary ,{ marginBottom: 10 }]}>
          Places disponibles : {parkingSelectedData?.dispo}
        </Text>
        {parkingSelectedData?.distanceBetweenUserAndParking && (
          <Text style={[styles.text, theme.secondary]}>
            À {parkingSelectedData?.distanceBetweenUserAndParking.toFixed(0)} km
          </Text>
        )}
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() =>
            Linking.openURL(
              `https://www.google.com/maps/search/?api=1&query=${
                parkingSelectedData?.name.toLowerCase().includes("parking")
                  ? parkingSelectedData?.name
                  : "parking " + parkingSelectedData?.name
              }`
            )
          }
        >
          <Icon name="directions" size={55} style={[styles.iconFav_Heart,theme.secondary]} />
          <Text style={[styles.text,theme.primary]}>Y aller</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => updateUserFavoriteParking()}>
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
