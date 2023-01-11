import { View, Text } from "react-native";
import React from "react";

// styles
import styles from "../styles/components/Events.js";

// svgs
import RedCard from "../../assets/svgs/redcard.svg";
import YellowCard from "../../assets/svgs/yellowcard.svg";
import Substitution from "../../assets/svgs/substitute.svg";
import Football from "../../assets/svgs/football.svg";

const Event = ({ data }) => {
  console.log({ data });

  const isSub = data.type === "substitution";
  const isGoal = data.type === "goal";
  const yellowCard = data.type === "booking";
  const redCard = data.type === "redCard";
  return (
    <View style={styles.container}>
      {/* profile */}

      {/* name Country */}
      <View style={styles.nameCon}>
        {isSub && (
          <>
            <Text style={styles.playerOn}>{data.playerOn.name}</Text>
            <Text style={styles.playerOff}>{data.playerOff.name}</Text>
          </>
        )}

        {!isSub && <Text style={styles.name}>{data.player.name}</Text>}
        <Text style={styles.country}>{data.country}</Text>
      </View>

      <View style={styles.type}>
        {yellowCard && (
          <>
            <View style={styles.icon}>
              <YellowCard />
            </View>
            <Text style={styles.txt}>Yellow Card</Text>
          </>
        )}
        {redCard && (
          <>
            <RedCard /> <Text style={styles.txt}>Red Card</Text>
          </>
        )}

        {isSub && (
          <>
            <Substitution /> <Text style={styles.txt}>Substitution</Text>
          </>
        )}

        {isGoal && (
          <>
            <Football />
            <Text style={styles.txt}>Goal</Text>
          </>
        )}
      </View>
      <Text style={styles.time}>{data.time}</Text>
    </View>
  );
};

export default Event;
