import React, { useEffect, useState } from "react";
import { Keyboard, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import { getAllParkingsData } from "../utils/mapview.utils";
import { addParkingList, addPopUpParking } from "../redux/reducers/parking";
import { RootState } from "../redux/store";
import { MapViewProps, Position } from "../typescript/components/MapView.type";
import { PopUpParkingType } from "../typescript/parkingType/parking.type";

const MapViewComponent = ({
  initialPosition,
  showsUserLocation,
  searchedPlace,
  userPosition,
}:MapViewProps) => {
  const { parkings } = useSelector((state:RootState) => state.parking);
  const dispatch = useDispatch();
  const [marker, setMarker] = useState<PopUpParkingType[]|null>(null);
  const userPositionOnMap = userPosition ?? null;

  useEffect(() => {
    if (searchedPlace) {
      const { parkingData, parkingsWithinRange } = getAllParkingsData(
        parkings,
        userPositionOnMap as Position,
        searchedPlace
      );
      dispatch(addParkingList(parkingsWithinRange));
      setMarker(parkingData as PopUpParkingType[]);
    } else {
      dispatch(addParkingList(null));
    }
  }, [searchedPlace, userPosition]);

  return (
    <MapView
      style={styles.map}
      provider="google"
      onPress={() => Keyboard.dismiss()}
      initialRegion={initialPosition}
      region={searchedPlace}
      showsUserLocation={showsUserLocation}
    >
      {searchedPlace && marker
        ? marker
            .filter(
              (parking) => parking.distanceBetweenSearchedPlaceAndParking < 30
            )
            .map((parking) => {
              return (
                <Marker
                  key={parking.parkId + marker.indexOf(parking)}
                  coordinate={{
                    latitude: parking.latitude,
                    longitude: parking.longitude,
                  }}
                  onPress={() => dispatch(addPopUpParking(parking))}
                  pinColor={parking.pinColor}
                ></Marker>
              );
            })
        : null}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapViewComponent;
