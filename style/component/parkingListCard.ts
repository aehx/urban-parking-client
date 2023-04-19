import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 15,
    marginBottom: 10,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  textContainer: {
    width: "70%",
  },
  infoContainer: {
    width: "30%",
    alignItems: "center",
  },
  text: {
    marginBottom: 10,
  },
  textBold: {
    fontWeight: "bold",
  },
});
