import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  flag: {
    width: 30,
    aspectRatio: 1,
    borderRadius: 15,
  },
  container: {
    marginTop: 10,
    flexDirection: "row",
    width: Dimensions.get("window").width - 8,
    marginLeft: 4,
    backgroundColor: "#f4f4f4",
    padding: 50,
    paddingHorizontal: 10,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 20,
  },
  countryName: {
    marginTop: 10,
    fontFamily: "poppins-r",
  },
  country: {
    width: 100,
    alignItems: "center",
  },
  statContainer: {
    alignItems: "center",
  },
  score: {
    fontSize: 40,
    color: "#333",
    fontFamily: "poppins-r",
  },
  dateTime: {
    fontFamily: "poppins-r",
    color: "#454545",
  },
});
