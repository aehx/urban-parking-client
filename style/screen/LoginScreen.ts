import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 40,
  },
  loginText: {
    fontSize: 25,
    marginBottom: 20,
  },
  text: {
    marginRight: 5,
  },
  inputContainer: {
    width: "80%",
    alignItems: "flex-start",
  },
  submitContainer: {
    width: "100%",
    alignItems: "center",
  },
  buttonSubmit: {
    width: "75%",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  redirectButtonContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
  errorContainer:{
    width:"100%",
    alignItems: "center",
  },
  error:{
    color: "#913",
    fontWeight:"bold",
  }
});
