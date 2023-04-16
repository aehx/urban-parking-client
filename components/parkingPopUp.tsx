import { View, Text, Linking, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import React from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { addPopUpParking } from "../redux/reducers/parking";

const ParkingPopUp = ({ distanceBetweenUserAndParking, name, dispo }) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.popUpContainer}>
      <Icon
        name="close-circle-outline"
        size={35}
        color="#ddd"
        style={{
          position: "absolute",
          top: "-50%",
          right: 5,
          color: "#0B131Dee",
        }}
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
          color="#ddd"
          style={{ color: "#2795FF", marginBottom: 10 }}
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
const styles = StyleSheet.create({
  popUpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    borderRadius: 25,
    bottom: 10,
    backgroundColor: "#0B131Dee",
    height: "20%",
    width: "90%",
    paddingLeft: 25,
    paddingRight: 25,
  },
  iconContainer: {
    alignItems: "center",
    width: "30%",
  },
  textContainer: {
    height: "100%",
    width: "60%",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 15,
    color: "#ddd",
  },
  buttonInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    width: "50%",
    top: "-25%",
    right: 10,
    alignItems: "center",
    backgroundColor: "#0B131Dee",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  textBold: {
    fontWeight: "bold",
  },
});
export default ParkingPopUp;
