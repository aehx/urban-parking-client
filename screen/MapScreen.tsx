import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RootState } from "../redux/store";
import { styles } from "../style/screen/MapScreen";
import { addParkingSelected, addPopUpParking } from "../redux/reducers/parking";
import MapViewComponent from "../components/MapView";
import ParkingPopUp from "../components/parkingPopUp";
import allowLocation from "../hooks/AllowLocation";
import useSearch from "../hooks/useSearch";
import { searchedPlaceData } from "../typescript/hooks/useSearch";
import { MapScreenProps } from "../typescript/navigation/navigation.types";

export default function MapScreen({ navigation }: MapScreenProps) {
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const { searchResult,searchedPlace, setSearchedPlace } =
    useSearch(searchInputValue);
  const { popUpParking } = useSelector((state: RootState) => state.parking);
  const dispatch = useDispatch();
  const { location, positionNotGranted } = allowLocation();
  const initialPosition =
    (location as searchedPlaceData) ??
    (positionNotGranted as searchedPlaceData);
  const userPosition = location ?? null;
  const showsUserLocation = !!location;
  const parkingPopUpProps = {
    distanceBetweenUserAndParking:
      popUpParking?.distanceBetweenUserAndParking as number,
    name: popUpParking?.name as string,
    dispo: popUpParking?.dispo as number,
  };

  return (
    <SafeAreaView style={styles.container}>
      <MapViewComponent
        initialPosition={initialPosition}
        showsUserLocation={showsUserLocation}
        searchedPlace={searchedPlace ?? initialPosition}
        userPosition={userPosition}
      />
      <View style={styles.inputContainer}>
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
          <ParkingPopUp {...parkingPopUpProps} />
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
