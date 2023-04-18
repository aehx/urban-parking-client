export type MapViewProps = {
  initialPosition: Position;
  showsUserLocation: boolean;
  searchedPlace: Position;
  userPosition: Position | null;
};

export type Position = {
  latitude: number;
  latitudeDelta: number;
  longitude: number;
  longitudeDelta: number;
};
