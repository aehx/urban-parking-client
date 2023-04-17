import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface x {
  test: string;
}

const initialState = {
  parkings: [],
  popUpParking: null,
  parkingList: null,
  parkingSelected: null,
  favoritesParking:[]
};

export const parkingSlice = createSlice({
  name: "parking",
  initialState,
  reducers: {
    addParkings: (state: RootState, action: PayloadAction<x>) => {
      state.value.parkings = action.payload;
    },
    addPopUpParking: (state: RootState, action: PayloadAction<x>) => {
      state.value.popUpParking = action.payload;
    },
    addParkingList: (state: RootState, action: PayloadAction<x>) => {
      state.value.parkingList = action.payload;
    },
    addParkingSelected: (state: RootState, action: PayloadAction<x>) => {
      state.value.parkingSelected = action.payload;
    },
    addFavoritesParking: (state: RootState, action: PayloadAction<x>) => {
      state.value.favoritesParking = action.payload;
    },
  },
});

export const {
  addParkings,
  addPopUpParking,
  addParkingList,
  addParkingSelected,
  addFavoritesParking
} = parkingSlice.actions;
export default parkingSlice.reducer;
