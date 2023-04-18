import { useContext, useEffect, useState } from "react";
import { parking } from "../axios.config";
import { AuthContext } from "../context/AuthContext";
import { useSelector, useDispatch } from "react-redux";
import { addFavoritesParking } from "../redux/reducers/parking";
import { RootState } from "../redux/store";
import { AxiosError, AxiosResponse } from "axios";
import { Parking } from "../typescript/parkingType/parking.type";

const getFavoritesParking = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState<null | AxiosError>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { parkings } = useSelector((state: RootState) => state.parking);
  const { userInfo } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      try {
        const axiosResult: AxiosResponse<[] | string[]> = await parking.get(
          `userFavorites/${userInfo?.email}`
        );
        const favoriteParking: Parking[] = parkings.filter((parking: Parking) =>
          axiosResult.data.some((el) => el === parking.name)
        );
        dispatch(addFavoritesParking(favoriteParking));
      } catch (e: any) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading, error };
};

export default getFavoritesParking;
