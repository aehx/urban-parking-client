import { getDistance } from "geolib";

export const distanceBetween = (
  userPositionOnMap,
  parkingLatLng,
  searchedPosition
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
