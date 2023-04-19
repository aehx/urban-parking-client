import { useContext, useEffect, useState } from "react";
import { parking } from "../axios.config";
import { AuthContext } from "../context/AuthContext";
import { useSelector, useDispatch } from "react-redux";
import { addFavoritesParkingData } from "../redux/reducers/parking";
import { RootState } from "../redux/store";
import { AxiosError, AxiosResponse } from "axios";
import { Parking } from "../typescript/parkingType/parking.type";

const getUserFavoritesParking = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState<null | AxiosError>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { allparkingsData } = useSelector((state: RootState) => state.parking);
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      try {
        const userFavoriteParkings: AxiosResponse<[] | string[]> = await parking.get(
          `userFavorites/${userInfo?.email}`
        );
        const filteredUserFavoriteParkings: Parking[] = allparkingsData.filter((parking: Parking) =>
          userFavoriteParkings.data.some((el) => el === parking.name)
        );
        dispatch(addFavoritesParkingData(filteredUserFavoriteParkings));
      } catch (e: any) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading, error };
};

export default getUserFavoritesParking;
