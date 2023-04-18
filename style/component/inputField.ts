import { StyleSheet } from "react-native";

export const inputStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
  },
  input: { flex: 1, paddingVertical: 0, color: "#ccc" },
  icon: { marginRight: 5, color: "#666" },
});
