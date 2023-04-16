import { useCallback, useState } from "react";
import axios from "axios";
import { Keyboard } from "react-native";

const useSearch = (search: string) => {
  const [searchedPlace, setSearchedPlace] = useState(null);
  const [error, setError] = useState(null);
  const searchResult = useCallback(async () => {
    try {
      if (search) {
        const axiosResult = await axios.get(
          `https://api-adresse.data.gouv.fr/search/?q=${search}`
        );
        const latLngData = axiosResult.data.features[0];
        setSearchedPlace({
          latitude: latLngData.geometry.coordinates[1],
          longitude: latLngData.geometry.coordinates[0],
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        });
        Keyboard.dismiss();
      }
    } catch (e: any) {
      setError(e);
    }
  }, [search]);
  return { searchResult, searchedPlace, setSearchedPlace, error };
};

export default useSearch;
