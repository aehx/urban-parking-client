import { useContext, useEffect, useState } from "react";
import { parking } from "../axios.config";
import { AuthContext } from "../context/AuthContext";
import { useSelector,useDispatch } from "react-redux";
import { addFavoritesParking } from "../redux/reducers/parking";

const getFavoritesParking = ()=>{
  const dispatch = useDispatch();
  const [error,setError] = useState(null)
  const [loading,setLoading] = useState(true)
  const {parkings} = useSelector((state)=> state.parking.value)
  const {userInfo} = useContext(AuthContext);
  useEffect(()=>{
    (async()=>{
      try {
          const axiosResult = await parking.get(`userFavorites/${userInfo.email}`);
          const favoriteParking = parkings.filter((parking)=>  axiosResult.data.some((el)=>el === parking.name));
          dispatch(addFavoritesParking(favoriteParking));
      } catch (e) {
        setError(e)
      } finally {
        setLoading(false)
      }
    })()
  },[])

  return {loading,error};
}

export default getFavoritesParking;