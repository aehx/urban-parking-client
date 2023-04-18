import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0B131D",
  },
  title: {
    fontSize: 23,
    marginBottom: 30,
    marginTop: 20,
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
  text: {
    color: "#ddd",
    fontSize: 17,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "80%",
  },
  textContainer: {
    width: "80%",
    marginTop: 30,
  },
  map: {
    height: "30%",
    width: "80%",
    borderRadius: 10,
  },
  iconFav_Heart: {
    color: "#2795FF",
    marginBottom: 10,
  },
});
