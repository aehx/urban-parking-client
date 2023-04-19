import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 23,
    marginBottom: 30,
    marginTop: 20,
  },
  flatListContainer: {
    width: "100%",
  },
  header: {
    width: "100%",
    paddingLeft: 10,
    paddingTop: 10,
  },
  text: {
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
    marginBottom: 10,
  },
});
