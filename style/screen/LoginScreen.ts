import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B131D",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    color: "#2795FF",
    fontSize: 40,
  },
  loginText: {
    fontSize: 25,
    marginBottom: 20,
    color: "#cccccc9c",
  },
  text: {
    color: "#cccccc9c",
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
    backgroundColor: "#2795FF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  textSignUp: {
    color: "#2795FF",
  },
  redirectButtonContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
  },
})