import { Position } from "../typescript/components/MapView.type";
import {
  Parking,
  PopUpParkingType,
} from "../typescript/parkingType/parking.type";
import { distanceBetween } from "./distance.utils";

export const pinStyle = (places: number) => {
  const pinColor = (() => {
    switch (true) {
      case places > 30:
        return "green";
      case places > 0 && places < 30:
        return "orange";
      case places === 0:
        return "red";
      default:
        return "black";
    }
  })();
  return pinColor;
};

export const getAllParkingsData = (
  parkings: Parking[],
  userPositionOnMap: Position,
  searchedPlace: Position
) => {
  const parkingData = parkings.map((parking) => {
    const parkingLatLng = {
      latitude: parking.latitude,
      longitude: parking.longitude,
    };
    const pinColor = pinStyle(parking.dispo);
    const {
      distanceBetweenUserAndParking,
      distanceBetweenSearchedPlaceAndParking,
    } = distanceBetween(userPositionOnMap, parkingLatLng, searchedPlace);
    return {
      ...parking,
      pinColor,
      distanceBetweenUserAndParking,
      distanceBetweenSearchedPlaceAndParking,
    };
  });
  let parkingsWithinRange: PopUpParkingType[] = [];
  if (searchedPlace) {
    parkingsWithinRange = parkingData.filter((parking) => {
      if (parking.distanceBetweenSearchedPlaceAndParking) {
        return parking.distanceBetweenSearchedPlaceAndParking < 30;
      } else {
        return;
      }
    }) as PopUpParkingType[];
  }
  return { parkingData, parkingsWithinRange };
};
