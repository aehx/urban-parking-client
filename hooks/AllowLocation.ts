import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { searchedPlaceData } from "../typescript/hooks/useSearch";

const AllowLocation = () => {
  const [location, setLocation] = useState<null | searchedPlaceData>(null);
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
          return;
        }
        let { latitude, longitude } = (
          await Location.getCurrentPositionAsync({})
        )?.coords;
        setLocation({
          latitude,
          longitude,
          latitudeDelta: 5,
          longitudeDelta: 5,
        });
      } catch (error: any) {
        console.log(error);
      }
    })();
  }, []);
  return { location, positionNotGranted };
};

export default AllowLocation;
