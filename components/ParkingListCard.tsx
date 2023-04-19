import React, { useContext } from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { styles } from "../style/component/parkingListCard";
import { ParkingListCardProps } from "../typescript/components/ParkingListCard.types";
import { ThemeContext } from "../context/ThemeContext";

const ParkingListCard = ({
  distanceBetweenUserAndParking,
  name,
  dispo,
  longitude,
  latitude,
  getParkingData,
}: ParkingListCardProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <TouchableOpacity
      style={[styles.cardContainer,theme.background]}
      onPress={() =>
        getParkingData({
          distanceBetweenUserAndParking,
          name,
          dispo,
          longitude,
          latitude,
        })
      }
    >
      <View style={styles.textContainer}>
        <Text style={[styles.text,theme.primary]}>{name}</Text>
        <Text style={[styles.text,theme.primary]}>places disponibles : {dispo}</Text>
        {distanceBetweenUserAndParking && (
          <Text style={[styles.text,theme.secondary, styles.textBold]}>
            à {distanceBetweenUserAndParking.toFixed(0)} km
          </Text>
        )}
      </View>
      <View style={styles.infoContainer}>
        <Ionicons name="information-circle-outline" color={theme.primary.color} size={30} />
        <Text style={[styles.text, styles.textBold,theme.primary]}>Plus d'infos</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ParkingListCard;
