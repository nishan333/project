import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  searchCon: {
    height: 67,
    width: Dimensions.get("window").width - 25,
    marginLeft: 12.5,
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",

    overflow: "hidden",
  },
  txtInput: {
    flex: 1,
    backgroundColor: "#e8e8e8",
    height: "100%",
    width: "100%",
    fontFamily: "poppins-m",
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  btn: {
    height: "100%",
    width: 80,
    backgroundColor: "#699BF7",
    alignItems: "center",
    justifyContent: "center",

    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
});
