import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import {styles} from "../style/screen/MapScreen"
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
        style={styles.inputContainer}
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
          style={styles.input}
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

