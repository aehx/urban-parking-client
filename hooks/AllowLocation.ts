import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { searchedPlaceData } from "../typescript/hooks/useSearch";

const AllowLocation = () => {
  const [positionGranted, setPositionGranted] = useState<null | searchedPlaceData>(null);
  const [positionNotGranted, setPositionNotGranted] =
    useState<null | searchedPlaceData>(null);

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setPositionNotGranted({
            latitude: 48.51,
            longitude: 2.34,
            latitudeDelta: 10,
            longitudeDelta: 10,
          });
        }else{
          await Location.watchPositionAsync({ distanceInterval: 50 }, (location) => {
            setPositionGranted({
              latitude:location?.coords.latitude,
              longitude:location?.coords.longitude,
              latitudeDelta: 5,
              longitudeDelta: 5,
            });

          });
        }
      } catch (error: any) {
        console.log(error);
      }
    })();
  }, []);
  return { positionGranted, positionNotGranted };
};

export default AllowLocation;
