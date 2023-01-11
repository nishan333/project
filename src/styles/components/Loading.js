import { View, Text, Image, Dimensions } from "react-native";
import React from "react";

const Loading = () => {
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../../../assets/animatedIcons/animation.gif")}
        style={{
          height: "20%",
          aspectRatio: 1,
        }}
      />
    </View>
  );
};

export default Loading;
