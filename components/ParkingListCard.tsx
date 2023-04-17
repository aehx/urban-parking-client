import { View, Text } from "react-native";
import React from "react";
import {styles} from "../style/component/parkingListCard"
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

const ParkingListCard = ({
  distanceBetweenUserAndParking,
  name,
  dispo,
  longitude,
  latitude,
  getParkingData,
}) => {
  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() =>
        getParkingData({
          distanceBetweenUserAndParking,
          name,
          dispo,
          longitude,
          latitude,
        })
      }
    >
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>places disponibles : {dispo}</Text>
        {distanceBetweenUserAndParking &&
        <Text style={[styles.text, styles.textBold, styles.distance]}>
          à  { distanceBetweenUserAndParking.toFixed(0)} km
        </Text>}
      </View>
      <View style={styles.infoContainer}>
        <Ionicons name="information-circle-outline" color="#ddd" size={30} />
        <Text style={[styles.text, styles.textBold]}>Plus d'infos</Text>
      </View>
    </TouchableOpacity>
  );
};


export default ParkingListCard;
