import { View, Text } from "react-native";
import React from "react";

// icons
import Arrow from "../../assets/svgs/arrow.svg";

// styles
import styles from "../styles/components/NoSearch.js";

const NoSearch = () => {
  return (
    <View style={styles.noSearchCon}>
      <View style={styles.arrow}>
        <Arrow />
      </View>
      <Text style={styles.heading}>Try Searching recent Matches</Text>
      <Text style={styles.desc}>Like: Brazil Vs Argentina</Text>
    </View>
  );
};

export default NoSearch;
