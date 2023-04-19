import { ParkingData } from "../components/ParkingListCard.types";
import {
  Parking,
  ParkingWithDistance,
  PopUpParkingType,
} from "../parkingType/parking.type";

export type InitialStateType = {
  allparkingsData: [] | Parking[];
  popUpParkingData: null | ParkingWithDistance;
  listOfParkingsData: null | ParkingWithDistance[] | PopUpParkingType[];
  parkingSelectedData: null | ParkingWithDistance | ParkingData;
  favoritesParkingData: [] | Parking[];
};
