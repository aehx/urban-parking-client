import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  popUpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    borderRadius: 25,
    bottom: 10,
    backgroundColor: "#0B131Dee",
    height: "20%",
    width: "90%",
    paddingLeft: 25,
    paddingRight: 25,
  },
  iconContainer: {
    alignItems: "center",
    width: "30%",
  },
  textContainer: {
    height: "100%",
    width: "60%",
    justifyContent: "space-evenly",
  },
  text: {
    fontSize: 15,
    color: "#ddd",
  },
  buttonInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    width: "50%",
    top: "-25%",
    right: 10,
    alignItems: "center",
    backgroundColor: "#0B131Dee",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  textBold: {
    fontWeight: "bold",
  },
  closeIcon: {
    position: "absolute",
    top: "-50%",
    right: 5,
    color: "#0B131Dee",
  },
  directionIcon: { color: "#2795FF", marginBottom: 10 },
});
