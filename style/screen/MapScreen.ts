import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  button: {
    borderWidth:1,
    position: "absolute",
    bottom: "22%",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 7,
    left: 25,
  },
  text: {
    fontSize: 15,
  },
  buttonInfo: {
    borderWidth:1,
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    width: "40%",
    bottom: "22%",
    right: 30,
    alignItems: "center",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  inputContainer: {
    flexDirection: "row",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    paddingBottom: 8,
    paddingLeft: 8,
    paddingTop: 8,
    marginBottom: 25,
    position: "absolute",
    top: "10%",
  },
  input: {
    flex: 1,
    paddingVertical: 0,
    fontSize: 20,
  },
  textBold: {
    fontWeight: "bold",
  },
});
