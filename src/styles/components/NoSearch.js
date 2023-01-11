import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  noSearchCon: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  arrow: {
    marginLeft: Dimensions.get("window").width - 270.5,
  },
  heading: {
    fontFamily: "poppins-sb",
    marginTop: 30,
    fontSize: 20,
    color: "#232323",
  },
  desc: {
    fontFamily: "poppins-r",
    marginTop: 5,
    fontSize: 14,
    color: "#686868",
  },
});
