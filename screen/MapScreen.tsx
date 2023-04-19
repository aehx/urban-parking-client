import React, { useContext, useState } from "react";
import {
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
import { addParkingSelectedData, addPopUpParkingData } from "../redux/reducers/parking";
import MapViewComponent from "../components/MapView";
import ParkingPopUp from "../components/parkingPopUp";
import allowLocation from "../hooks/AllowLocation";
import useSearch from "../hooks/useSearch";
import { searchedPlaceData } from "../typescript/hooks/useSearch";
import { MapScreenProps } from "../typescript/navigation/navigation.types";
import { ThemeContext } from "../context/ThemeContext";

export default function MapScreen({ navigation }: MapScreenProps) {
  const dispatch = useDispatch();
  const [searchInputValue, setSearchInputValue] = useState<string>("");
  const { popUpParkingData } = useSelector((state: RootState) => state.parking);
  const { positionGranted, positionNotGranted } = allowLocation();
  const { getResultFromSearch,searchedPlace, setSearchedPlace } = useSearch(searchInputValue);
  const initialPosition = (positionGranted as searchedPlaceData) ?? (positionNotGranted as searchedPlaceData);
  const userPosition = positionGranted;
  const showsUserLocation = !!positionGranted;
  const parkingPopUpProps = {
    distanceBetweenUserAndParking:popUpParkingData?.distanceBetweenUserAndParking as number,
    name: popUpParkingData?.name as string,
    dispo: popUpParkingData?.dispo as number,
  };
  const { theme } = useContext(ThemeContext)

  return (
    <View style={[styles.container,theme.background]}>
      <MapViewComponent
        initialPosition={initialPosition}
        showsUserLocation={showsUserLocation}
        searchedPlace={searchedPlace ?? initialPosition}
        userPosition={userPosition}
      />
      <View style={[styles.inputContainer,theme.mapInput]}>
        <MaterialIcons
          name="search"
          size={28}
          color={theme.primary.color}
          style={{ marginRight: 5 }}
          onPress={() => getResultFromSearch()}
        />
        <TextInput
          placeholder={"Chercher un parking"}
          placeholderTextColor={theme.primary.color}
          keyboardType={"default"}
          style={[styles.input,theme.primary]}
          onChangeText={(text) => setSearchInputValue(text)}
          value={searchInputValue}
        />
        {searchedPlace && (
          <Icon
            name="close-circle-outline"
            size={28}
            color={theme.primary.color}
            style={{ marginRight: 10 }}
            onPress={() => {
              setSearchInputValue(""),
                setSearchedPlace(null),
                dispatch(addPopUpParkingData(null));
            }}
          />
        )}
      </View>
      {popUpParkingData ? (
        <>
          <TouchableOpacity
            style={[styles.button,theme.popUp.primary]}
            onPress={() => {
              navigation.navigate("ParkingList");
            }}
          >
            <Text style={[styles.text, theme.secondary]}>
              Liste des parkings
            </Text>
          </TouchableOpacity>
          <ParkingPopUp {...parkingPopUpProps} />
          <TouchableOpacity
            style={[styles.buttonInfo,theme.popUp.primary]}
            onPress={() => {
              dispatch(addParkingSelectedData({ ...popUpParkingData }));
              navigation.navigate("ParkingInformation");
            }}
          >
            <Ionicons
              name="information-circle-outline"
              color={theme.primary.color}
              size={20}
            />
            <Text style={[styles.text, styles.textBold,theme.primary, { marginRight: 3 }]}>
              Plus d'infos
            </Text>
          </TouchableOpacity>
        </>
      ) : null}
    </View>
  );
}
