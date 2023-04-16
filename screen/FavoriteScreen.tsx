import { View, Text, StyleSheet } from "react-native";
import React from "react";

const FavoriteScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.goBack()}>FavoriteScreen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B131D",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default FavoriteScreen;
