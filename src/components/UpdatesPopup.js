import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";

// styles
import styles from "../styles/components/UpdatePopup.js";

// external
import axios from "axios";

// context
import { cp } from "../../Context.js";

// components
import Event from "./Event.js";

const UpdatesPopup = () => {
  const {
    popup: [showDetails, setShowDetails],
  } = useContext(cp);
  const [fetchData, setFetchData] = useState(false);

  const fetchMatchData = async () => {
    try {
      const { data } = await axios.get(
        `https://worldcupjson.net/matches/${showDetails}`
      );

      setFetchData({
        ...data,
      });

      const eventsArray = [];

      data.away_team_events.forEach((event, index) => {
        let newEvent;
        if (event.type_of_event === "substitution") {
          const playerOff = JSON.parse(event.extra_info).player_off;
          const playerOn = JSON.parse(event.extra_info).player_on;

          return (newEvent = {
            country: data.away_team.name,
            playerOff: {
              name: playerOff,
              image: "",
            },
            playerOn: {
              name: playerOn,
              image: "",
            },
            time: event.time,
            type: event.type_of_event,
          });
        }

        newEvent = {
          country: data.away_team.name,
          player: {
            name: event.player,
            image: "",
          },
          time: event.time,
          type: event.type_of_event,
        };

        eventsArray.push(newEvent);
      });
      data.home_team_events.forEach((event, index) => {
        let newEvent;
        if (event.type_of_event === "substitution") {
          const playerOff = JSON.parse(event.extra_info).player_off;
          const playerOn = JSON.parse(event.extra_info).player_on;

          return (newEvent = {
            country: data.home_team.name,
            playerOff: {
              name: playerOff,
              image: "",
            },
            playerOn: {
              name: playerOn,
              image: "",
            },
            time: event.time,
            type: event.type_of_event,
          });
        }

        newEvent = {
          country: data.home_team.name,
          player: {
            name: event.player,
            image: "",
          },
          time: event.time,
          type: event.type_of_event,
        };

        eventsArray.push(newEvent);
      });

      setFetchData([...eventsArray]);
    } catch (e) {
      console.log(e.message);
    }
  };
  const closePopup = () => {
    setShowDetails(false);
  };
  useEffect(() => {
    if (showDetails) fetchMatchData();
  }, [showDetails]);

  return (
    <>
      <Pressable style={styles.blackScreen} onPress={closePopup}></Pressable>

      <View style={styles.whitePopUp}>
        {/* navigation */}
        {/* cards */}

        <ScrollView style={styles.scrollCon}>
          {fetchData.length &&
            fetchData.map((data, index) => {
              return <Event data={data} key={index} />;
            })}

          <View style={styles.padder}></View>
        </ScrollView>
      </View>
    </>
  );
};

export default UpdatesPopup;
