import { Position } from "../typescript/components/MapView.type";
import {
  Parking,
  PopUpParkingType,
} from "../typescript/parkingType/parking.type";
import { distanceBetween } from "./distance.utils";
/**
 * @param places the number of places of the parking 
 * @return A color based on the number of available spots.
*/

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

/**
 * @param allparkingsData all of the car parks
 * @param userPositionOnMap The coordinates of the user
 * @param searchedPlace The coordinates of the searched location
 * @return A color based on the number of available spots.
*/
export const getAllParkingsData = (
  allparkingsData: Parking[],
  userPositionOnMap: Position,
  searchedPlace: Position
) => {
  const parkingData = allparkingsData.map((parking) => {
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
