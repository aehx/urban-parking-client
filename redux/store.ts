import { combineReducers, configureStore, Reducer } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import parking from "./reducers/parking";
import { InitialStateType } from "../typescript/redux/redux.type";

const persistConfig = {
  key: "urbanparking",
  storage: AsyncStorage,
};

const reducers: Reducer<{ parking: InitialStateType }> = combineReducers({
  parking: parking,
});

const persisted = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persisted,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
