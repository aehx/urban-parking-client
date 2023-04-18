export interface Parking {
  dispo: number;
  latitude: number;
  longitude: number;
  name: string;
  parkId: string;
}
export interface ParkingWithDistance {
  dispo: number;
  latitude: number;
  longitude: number;
  name: string;
  parkId: string;
  distanceBetweenSearchedPlaceAndParking: number;
  distanceBetweenUserAndParking: number | null;
}

export type PopUpParkingType = ParkingWithDistance & {
  pinColor: string;
};

export type LatLng = {
  latitude: number;
  longitude: number;
};
