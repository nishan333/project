import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  events: {
    flex: 1,
  },
  event: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  flag: {
    width: 30,
    aspectRatio: 1,
  },
  flags: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
