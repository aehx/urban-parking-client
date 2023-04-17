import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B131D",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  button: {
    position: "absolute",
    bottom: "22%",
    backgroundColor: "#0B131Dee",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 7,
    left: 25,
  },
  text: {
    fontSize: 15,
    color: "#ddd",
  },
  buttonInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    width: "40%",
    bottom: "22%",
    right: 30,
    alignItems: "center",
    backgroundColor: "#0B131Dee",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  inputContainer:{
    flexDirection: "row",
          borderRadius: 20,
          backgroundColor: "#0000009f",
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
  input:{
    flex: 1,
    paddingVertical: 0,
    color: "#fff",
    fontSize: 20,
  }
})