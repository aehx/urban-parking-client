import { View, Text, Linking, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import React from "react";
import {styles} from "../style/component/parkingPopUp"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { addPopUpParking } from "../redux/reducers/parking";

const ParkingPopUp = ({ distanceBetweenUserAndParking, name, dispo }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.popUpContainer}>
      <Icon
        name="close-circle-outline"
        size={35}
        style={styles.closeIcon}
        onPress={() => {
          dispatch(addPopUpParking(null));
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
        <Icon
          name="directions"
          size={50}
          style={styles.directionIcon}
        />
        <Text style={styles.text}>Y aller</Text>
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>Nombre de places : {dispo}</Text>
        {distanceBetweenUserAndParking && (
          <Text style={styles.text}>
            À {distanceBetweenUserAndParking.toFixed(0)} Km
          </Text>
        )}
      </View>
    </View>
  );
};

export default ParkingPopUp;
