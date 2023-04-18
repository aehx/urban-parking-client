import { ParkingWithDistance } from "../parkingType/parking.type";

export type ParkingData = {
  distanceBetweenUserAndParking?: number | null;
  name: string;
  dispo: number;
  longitude: number;
  latitude: number;
};

export type ParkingListCardProps = ParkingData & {
  getParkingData: (parking: ParkingData | ParkingWithDistance) => void;
};
