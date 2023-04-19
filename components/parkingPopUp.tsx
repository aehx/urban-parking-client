import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { View, Text, Linking, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "../style/component/parkingPopUp";
import { addPopUpParkingData } from "../redux/reducers/parking";
import { ParkingPopUpProps } from "../typescript/components/ParkingPopUp.types";
import { ThemeContext } from "../context/ThemeContext";

const ParkingPopUp = ({
  distanceBetweenUserAndParking,
  name,
  dispo,
}: ParkingPopUpProps) => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext)
  return (
    <View style={[styles.popUpContainer,theme.popUp.primary]}>
      <Icon
        name="close-circle-outline"
        size={35}
        style={[styles.closeIcon,theme.popUp.icon]}
        onPress={() => {
          dispatch(addPopUpParkingData(null));
        }}
      />
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() =>
          Linking.openURL(
            `https://www.google.com/maps/search/?api=1&query=${
              name.toLowerCase().includes("parking") ? name : "parking" + name
            }`
          )
        }
      >
        <Icon name="directions" size={50} style={[styles.directionIcon,theme.secondary]} />
        <Text style={[styles.text,theme.primary]}>Y aller</Text>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={[styles.text,theme.primary]}>{name}</Text>
        <Text style={[styles.text,theme.primary]}>Nombre de places : {dispo}</Text>
        {distanceBetweenUserAndParking && (
          <Text style={[styles.text,theme.secondary]}>
            À {distanceBetweenUserAndParking.toFixed(0)} Km
          </Text>
        )}
      </View>
    </View>
  );
};

export default ParkingPopUp;
