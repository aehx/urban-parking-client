import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B131D",
    alignItems: "center",
    justifyContent: "center",
  },
  test: {
    backgroundColor: "#000",
    width: "100%",
  },
  header: {
    width: "100%",
    paddingLeft: 10,
    paddingTop: 10,
  },
});

export default ParkingListScreen;
