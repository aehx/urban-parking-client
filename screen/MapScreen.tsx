import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MapViewComponent from "../components/MapView";
import allowLocation from "../hooks/AllowLocation";
import useSearch from "../hooks/useSearch";
import { addParkingSelected, addPopUpParking } from "../redux/reducers/parking";
import ParkingPopUp from "../components/parkingPopUp";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function MapScreen({ navigation }) {
  const [searchInputValue, setSearchInputValue] = useState("");
  const { searchResult, error, searchedPlace, setSearchedPlace } =
    useSearch(searchInputValue);
  const { popUpParking } = useSelector((state) => state.parking.value);
  const dispatch = useDispatch();
  const { location, positionNotGranted } = allowLocation();
  const initialPosition = location ?? positionNotGranted;
  const userPosition = location ?? null;
  const showsUserLocation = !!location;

  return (
    <SafeAreaView style={styles.container}>
      <MapViewComponent
        initialPosition={initialPosition}
        showsUserLocation={showsUserLocation}
        searchedPlace={searchedPlace ?? initialPosition}
        userPosition={userPosition}
      />
      <View
        style={{
          flexDirection: "row",
          borderRadius: 20,
          backgroundColor: "#0000009f",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          paddingBottom: 8,
          paddingLeft: 8,
          paddingTop: 8,
          marginBottom: 25,
          position: "absolute",
          top: "10%",
        }}
      >
        <MaterialIcons
          name="search"
          size={28}
          color="#ddd"
          style={{ marginRight: 5 }}
          onPress={() => searchResult()}
        />
        <TextInput
          placeholder={"Chercher un parking"}
          placeholderTextColor={"#ddd"}
          keyboardType={"default"}
          style={{
            flex: 1,
            paddingVertical: 0,
            color: "#fff",
            fontSize: 20,
          }}
          onChangeText={(text) => setSearchInputValue(text)}
          value={searchInputValue}
        />
        {searchedPlace && (
          <Icon
            name="close-circle-outline"
            size={28}
            color="#ddd"
            style={{ marginRight: 10 }}
            onPress={() => {
              setSearchInputValue(""),
                setSearchedPlace(null),
                dispatch(addPopUpParking(null));
            }}
          />
        )}
      </View>
      {popUpParking ? (
        <>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("ParkingList");
            }}
          >
            <Text style={[styles.text, { color: "#2795FF" }]}>
              Liste des parkings
            </Text>
          </TouchableOpacity>
          <ParkingPopUp {...popUpParking} />
          <TouchableOpacity
            style={styles.buttonInfo}
            onPress={() => {
              dispatch(addParkingSelected({ ...popUpParking }));
              navigation.navigate("ParkingInformation");
            }}
          >
            <Ionicons
              name="information-circle-outline"
              color="#ddd"
              size={20}
            />
            <Text style={[styles.text, styles.textBold, { marginRight: 3 }]}>
              Plus d'infos
            </Text>
          </TouchableOpacity>
        </>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B131D",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  button: {
    position: "absolute",
    bottom: "22%",
    backgroundColor: "#0B131Dee",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 7,
    left: 25,
  },
  text: {
    fontSize: 15,
    color: "#ddd",
  },
  buttonInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    width: "40%",
    bottom: "22%",
    right: 30,
    alignItems: "center",
    backgroundColor: "#0B131Dee",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});
