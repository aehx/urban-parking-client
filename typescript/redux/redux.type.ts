import { ParkingData } from "../components/ParkingListCard.types";
import {
  Parking,
  ParkingWithDistance,
  PopUpParkingType,
} from "../parkingType/parking.type";

export type InitialStateType = {
  parkings: [] | Parking[];
  popUpParking: null | ParkingWithDistance;
  parkingList: null | ParkingWithDistance[] | PopUpParkingType[];
  parkingSelected: null | ParkingWithDistance | ParkingData;
  favoritesParking: [] | Parking[];
};
