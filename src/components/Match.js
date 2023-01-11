import { View, Text, Image } from "react-native";
import React from "react";

// styles
import styles from "../styles/Match.js";

// components
import CountDown from "../components/CountDown.js";

// moment for dates
import moment from "moment";

const Match = ({ data, mode }) => {
  if (
    data.away_team.name === "To Be Determined" ||
    data.home_team.name === "To Be Determined"
  )
    return <></>;

  return (
    <View style={styles.container}>
      <View style={[styles.country, styles.countryOne]}>
        <Image
          style={styles.flag}
          source={{
            uri: `https://countryflagsapi.com/png/${
              data.home_team.name == "Korea Republic"
                ? data.home_team.country
                : data.home_team.name
            }`,
          }}
        />
        <Text style={styles.countryName}>{data.home_team.name}</Text>
      </View>

      <View style={styles.statContainer}>
        {data.status === "completed" || mode === "live" ? (
          <>
            <Text style={styles.score}>
              {data.home_team.goals + "  :  " + data.away_team.goals}
            </Text>
            <Text style={styles.dateTime}>
              {mode === "live"
                ? "Live"
                : data.datetime
                ? moment(data.datetime).format("MMM Do YY")
                : data.datetime}
            </Text>
          </>
        ) : (
          <CountDown trackingTime={data.datetime} />
        )}
      </View>

      <View style={[styles.country, styles.countryTwo]}>
        <Image
          style={styles.flag}
          source={{
            uri: `https://countryflagsapi.com/png/${data.away_team.name}`,
          }}
        />
        <Text style={styles.countryName}>{data.away_team.name}</Text>
      </View>
    </View>
  );
};

export default Match;
