import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type BottomTabParamList = {
  home: HomeStackParamList;
  favorites: FavoriteStackParamList;
  settings: SettingStackParamList;
};

export type HomeStackParamList = {
  Map: undefined;
  ParkingList: undefined;
  ParkingInformation: undefined;
};

export type FavoriteStackParamList = {
  Favorites: undefined;
  ParkingInformation: undefined;
};

export type SettingStackParamList = {
  Settings: undefined;
  Favorites: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type ParkingListScreenProps = {
  navigation: NativeStackScreenProps<
    HomeStackParamList,
    "ParkingList"
  >["navigation"];
};
export type LoginScreenProps = {
  navigation: NativeStackScreenProps<
    AuthStackParamList,
    "Register"
  >["navigation"];
};
export type ParkingInformationScreenProps = {
  navigation: NativeStackScreenProps<
    HomeStackParamList,
    "ParkingInformation"
  >["navigation"];
};
export type MapScreenProps = {
  navigation: NativeStackScreenProps<
    HomeStackParamList,
    "ParkingList" | "Map" | "ParkingInformation"
  >["navigation"];
};
export type RegisterScreenProps = {
  navigation: NativeStackScreenProps<AuthStackParamList, "Login">["navigation"];
};
export type SettingScreenProps = {
  navigation: NativeStackScreenProps<
    SettingStackParamList,
    "Settings"
  >["navigation"];
};
export type FavoriteScreenProps = {
  navigation: NativeStackScreenProps<
    FavoriteStackParamList,
    "Favorites"
  >["navigation"];
};
