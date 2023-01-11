import { View, Text } from "react-native";
import React from "react";

// external packages
import Counter from "react-native-countdown-component";

const CountDown = ({ trackingTime }) => {
  const matchTime = new Date(trackingTime);

  const ourTime = new Date();

  const DifferenceSeconds = parseInt((matchTime - ourTime) / 1000);

  return (
    <Counter
      size={20}
      until={DifferenceSeconds}
      timeToShow={["D", "H", "M"]}
      timeLabels={{ d: "DD", h: "HH", m: "MM" }}
    />
  );
};

export default CountDown;
