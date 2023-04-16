import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { addParkingSelected } from "../redux/reducers/parking";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { pinStyle } from "../utils/mapview.utils";

const ParkingInformationScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { parkingSelected } = useSelector((state) => state.parking.value);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back-outline"
          color="#ddd"
          size={30}
          onPress={() => {
            dispatch(addParkingSelected(null)), navigation.goBack();
          }}
        />
      </View>
      <Text style={[styles.text, styles.title]}>{parkingSelected.name}</Text>
      <MapView
        style={{ height: "30%", width: "80%", borderRadius: 10 }}
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
            color="#ddd"
            style={{ color: "#2795FF", marginBottom: 10 }}
          />
          <Text style={styles.text}>Y aller</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => {}}>
          <Icon
            name="heart-plus"
            size={50}
            color="#ddd"
            style={{ color: "#2795FF", marginBottom: 10 }}
          />
          <Text style={styles.text}>Ajouter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0B131D",
  },
  title: {
    fontSize: 23,
    marginBottom: 30,
    marginTop: 20,
  },
  test: {
    backgroundColor: "#000",
    width: "100%",
  },
  header: {
    width: "100%",
    paddingLeft: 10,
    paddingTop: 10,
  },
  text: {
    color: "#ddd",
    fontSize: 17,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "80%",
  },
  textContainer: {
    width: "80%",
    marginTop: 30,
  },
});

export default ParkingInformationScreen;
