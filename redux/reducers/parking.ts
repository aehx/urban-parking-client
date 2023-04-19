import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
  Parking,
  ParkingWithDistance,
} from "../../typescript/parkingType/parking.type";
import { InitialStateType } from "../../typescript/redux/redux.type";
import { ParkingData } from "../../typescript/components/ParkingListCard.types";

const initialState: InitialStateType = {
  allparkingsData: [],
  popUpParkingData: null,
  listOfParkingsData: null,
  parkingSelectedData: null,
  favoritesParkingData: [],
};

export const parkingSlice = createSlice({
  name: "parking",
  initialState,
  reducers: {
    addAllparkingsData: (
      state: InitialStateType,
      action: PayloadAction<Parking[]>
    ) => {
      state.allparkingsData = action.payload;
    },
    addPopUpParkingData: (
      state: InitialStateType,
      action: PayloadAction<ParkingWithDistance | null>
    ) => {
      state.popUpParkingData = action.payload;
    },
    addListOfParkingsData: (
      state: InitialStateType,
      action: PayloadAction<ParkingWithDistance[] | null>
    ) => {
      state.listOfParkingsData = action.payload;
    },
    addParkingSelectedData: (
      state: InitialStateType,
      action: PayloadAction<ParkingWithDistance | ParkingData | null>
    ) => {
      state.parkingSelectedData = action.payload;
    },
    addFavoritesParkingData: (
      state: InitialStateType,
      action: PayloadAction<Parking[]>
    ) => {
      state.favoritesParkingData = action.payload;
    },
  },
});

export type CounterSelector = (state: RootState) => InitialStateType;
export const selectParkings = (state: RootState): InitialStateType =>
  state.parking;

export const {
  addAllparkingsData,
  addPopUpParkingData,
  addListOfParkingsData,
  addParkingSelectedData,
  addFavoritesParkingData,
} = parkingSlice.actions;

export default parkingSlice.reducer;
