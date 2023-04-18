import React from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Ionicons from "react-native-vector-icons/Ionicons";
import { addParkingSelected } from "../redux/reducers/parking";
import { RootState } from "../redux/store";
import { styles } from "../style/screen/ParkingListScreen";
import ParkingListCard from "../components/ParkingListCard";
import { ParkingListScreenProps } from "../typescript/navigation/navigation.types";
import { ParkingData } from "../typescript/components/ParkingListCard.types";

const ParkingListScreen = ({ navigation }: ParkingListScreenProps) => {
  const dispatch = useDispatch();
  const { parkingList } = useSelector((state: RootState) => state.parking);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back-outline"
          color="#ddd"
          size={30}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={styles.test}>
        <FlatList
          data={parkingList}
          renderItem={({ item }) => {
            return (
              <ParkingListCard
                {...item}
                getParkingData={(parking: ParkingData) => {
                  dispatch(addParkingSelected(parking)),
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
