import { distanceBetween } from "./distance.utils";

export const pinStyle = (places) => {
  const pinColor = (() => {
    switch (true) {
      case places > 30:
        return "green";
      case places > 0 && places < 30:
        return "orange";
      case places === 0:
        return "red";
    }
  })();
  return pinColor;
};

export const getAllParkingsData = (
  parkings,
  userPositionOnMap,
  searchedPlace
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
  let parkingsWithinRange = [];
  if (searchedPlace) {
    parkingsWithinRange = parkingData.filter(
      (parking) => parking.distanceBetweenSearchedPlaceAndParking < 30
    );
  }
  return { parkingData, parkingsWithinRange };
};
