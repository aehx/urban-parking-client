import { View, Text, StyleSheet } from "react-native";
import React from "react";
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
        <Text style={[styles.text, styles.textBold, styles.distance]}>
          à {distanceBetweenUserAndParking.toFixed(0)} km
        </Text>
      </View>
      <View style={styles.infoContainer}>
        <Ionicons name="information-circle-outline" color="#ddd" size={30} />
        <Text style={[styles.text, styles.textBold]}>Plus d'infos</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#0B131D",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 15,
    marginBottom: 10,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  textContainer: {
    width: "70%",
  },
  infoContainer: {
    width: "30%",
    alignItems: "center",
  },
  text: {
    color: "#ddd",
    marginBottom: 10,
  },
  textBold: {
    fontWeight: "bold",
  },
  distance: {
    color: "#2795FF",
  },
});

export default ParkingListCard;
