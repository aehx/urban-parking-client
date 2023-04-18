import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import {
  Parking,
  ParkingWithDistance,
} from "../../typescript/parkingType/parking.type";
import { InitialStateType } from "../../typescript/redux/redux.type";
import { ParkingData } from "../../typescript/components/ParkingListCard.types";

const initialState: InitialStateType = {
  parkings: [],
  popUpParking: null,
  parkingList: null,
  parkingSelected: null,
  favoritesParking: [],
};

export const parkingSlice = createSlice({
  name: "parking",
  initialState,
  reducers: {
    addParkings: (
      state: InitialStateType,
      action: PayloadAction<Parking[]>
    ) => {
      state.parkings = action.payload;
    },
    addPopUpParking: (
      state: InitialStateType,
      action: PayloadAction<ParkingWithDistance | null>
    ) => {
      state.popUpParking = action.payload;
    },
    addParkingList: (
      state: InitialStateType,
      action: PayloadAction<ParkingWithDistance[] | null>
    ) => {
      state.parkingList = action.payload;
    },
    addParkingSelected: (
      state: InitialStateType,
      action: PayloadAction<ParkingWithDistance | ParkingData | null>
    ) => {
      state.parkingSelected = action.payload;
    },
    addFavoritesParking: (
      state: InitialStateType,
      action: PayloadAction<Parking[]>
    ) => {
      state.favoritesParking = action.payload;
    },
  },
});

export type CounterSelector = (state: RootState) => InitialStateType;
export const selectParkings = (state: RootState): InitialStateType =>
  state.parking;

export const {
  addParkings,
  addPopUpParking,
  addParkingList,
  addParkingSelected,
  addFavoritesParking,
} = parkingSlice.actions;

export default parkingSlice.reducer;
