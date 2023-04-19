import { useCallback, useState } from "react";
import { Keyboard } from "react-native";
import axios, { AxiosResponse } from "axios";
import { GeoData, searchedPlaceData } from "../typescript/hooks/useSearch";

const useSearch = (search: string) => {
  const [searchedPlace, setSearchedPlace] = useState<null | searchedPlaceData>(null);
  const [error, setError] = useState(null);
  const getResultFromSearch = useCallback(async () => {
    try {
      if (search) {
        const axiosResult: AxiosResponse<GeoData> = await axios.get(
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
  return { getResultFromSearch, searchedPlace, setSearchedPlace, error };
};

export default useSearch;
