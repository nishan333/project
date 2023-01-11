import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: "row",
    width: Dimensions.get("window").width - 8,
    marginLeft: 4,
    backgroundColor: "#fff",
    padding: 50,
    paddingHorizontal: 5,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 20,
  },
  type: {
    alignItems: "center",
    // backgroundColor: "#333",
    width: 100,
  },
  nameCon: {
    width: 170,
    // backgroundColor: "red",
  },
});
