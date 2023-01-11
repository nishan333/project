import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    width: Dimensions.get("window").width,
    backgroundColor: "#fff",
    height: 110,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 20,
    position: "absolute",
    bottom: -10,
    left: 0,
  },
  navItem: {
    alignItems: "center",
    width: 100,
    height: 20,
  },
  txt: {
    fontSize: 12,
    color: "#699BF7",
  },
});
