import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  blackScreen: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("window").width,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#5050504d",
  },
  whitePopUp: {
    height: Dimensions.get("screen").height - 120,
    width: "100%",
    backgroundColor: "#e8e8e8",
    position: "absolute",
    bottom: -50,
    left: 0,
    borderRadius: 30,
  },
  scrollCon: {
    marginTop: 50,
  },
  padder: {
    height: 100,
    width: Dimensions.get("window").width,
  },
});
