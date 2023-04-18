import { getDistance } from "geolib";
import { Position } from "../typescript/components/MapView.type";
import { LatLng } from "../typescript/parkingType/parking.type";

export const distanceBetween = (
  userPositionOnMap: Position,
  parkingLatLng: LatLng,
  searchedPosition: Position
) => {
  const distanceBetweenUserAndParking = userPositionOnMap
    ? getDistance(
        {
          latitude: userPositionOnMap.latitude,
          longitude: userPositionOnMap.longitude,
        },
        {
          latitude: parkingLatLng.latitude,
          longitude: parkingLatLng.longitude,
        }
      ) / 1000
    : null;
  const distanceBetweenSearchedPlaceAndParking = searchedPosition
    ? getDistance(
        {
          latitude: searchedPosition.latitude,
          longitude: searchedPosition.longitude,
        },
        {
          latitude: parkingLatLng.latitude,
          longitude: parkingLatLng.longitude,
        }
      ) / 1000
    : null;
  return {
    distanceBetweenUserAndParking,
    distanceBetweenSearchedPlaceAndParking,
  };
};
