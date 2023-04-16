import { useEffect, useState } from "react";
import * as Location from "expo-location";

const allowLocation = () => {
  const [location, setLocation] = useState(null);
  const [positionNotGranted, setPositionNotGranted] = useState(null);

  useEffect(() => {
    (async () => {
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
      let { latitude, longitude } = (await Location.getCurrentPositionAsync({}))
        ?.coords;
      setLocation({ latitude, longitude, latitudeDelta: 5, longitudeDelta: 5 });
    })();
  }, []);
  return { location, positionNotGranted };
};

export default allowLocation;
