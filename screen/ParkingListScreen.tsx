import { View, SafeAreaView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {styles} from "../style/screen/ParkingListScreen"
import React from "react";
import ParkingListCard from "../components/ParkingListCard";
import Ionicons from "react-native-vector-icons/Ionicons";
import { addParkingSelected } from "../redux/reducers/parking";

const ParkingListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { parkingList } = useSelector((state) => state.parking.value);

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
                getParkingData={(parking) => {
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
