import React, { useContext } from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import { addParkingSelectedData } from "../redux/reducers/parking";
import { RootState } from "../redux/store";
import { styles } from "../style/screen/ParkingListScreen";
import ParkingListCard from "../components/ParkingListCard";
import { ParkingListScreenProps } from "../typescript/navigation/navigation.types";
import { ParkingData } from "../typescript/components/ParkingListCard.types";
import { ThemeContext } from "../context/ThemeContext";

const ParkingListScreen = ({ navigation }: ParkingListScreenProps) => {
  const dispatch = useDispatch();
  const { listOfParkingsData } = useSelector((state: RootState) => state.parking);
  const { theme } = useContext(ThemeContext)
  return (
    <SafeAreaView style={[styles.container,theme.background]}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back-outline"
          color={theme.primary.color}
          size={30}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={[styles.flatListContainer,theme.flatList]}>
        <FlatList
          data={listOfParkingsData}
          renderItem={({ item }) => {
            return (
              <ParkingListCard
                {...item}
                getParkingData={(parking: ParkingData) => {
                  dispatch(addParkingSelectedData(parking)),
                    navigation.navigate("ParkingInformation");
                }}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ParkingListScreen;
