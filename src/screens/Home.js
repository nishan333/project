import React, { useContext, useEffect } from "react";
import { View, Text, ScrollView, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

// context
import { cp } from "../../Context";

// styles
import styles from "../styles/Home.js";

// components
import Match from "../components/Match.js";
import Navigation from "../components/Navigation.js";
import UpdatesPopup from "../components/UpdatesPopup";
import Loading from "../styles/components/Loading";

function Home() {
  const router = useNavigation();

  const {
    popup: [showDetails, setShowDetails],
    search: [, setQuery],
    events: {
      today: todaysMatches,
      live: liveMatches,
      upNext: upcomingMatches,
      pre: previousMatches,
    },
    animation: [loading, setLoading],
  } = useContext(cp);

  useEffect(() => {
    if (
      !previousMatches.length ||
      !todaysMatches.length ||
      !upcomingMatches.length
    )
      return;

    setLoading(false);
  }, [previousMatches]);

  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          {/* hero section  */}
          <Image
            style={styles.heroSection}
            source={require("../../assets/Imgs/heroImg.png")}
          />

          {/* LIVE matches */}
          {liveMatches.length !== 0 && (
            <View style={styles.EventContainer}>
              <Text style={styles.title}>Live Matches</Text>
              {liveMatches.map((event, index) => {
                return (
                  <React.Fragment key={index}>
                    <Pressable
                      onPress={() => {
                        setShowDetails(event.id);
                      }}
                    >
                      <Match data={event} key={event.id} mode={"live"} />
                    </Pressable>
                  </React.Fragment>
                );
              })}
            </View>
          )}

          {/* todays Matches */}
          <View style={styles.EventContainer}>
            <Text style={styles.title}>Todays Matches</Text>
            {todaysMatches.map((event, index) => {
              return (
                <React.Fragment key={index}>
                  <Pressable
                    onPress={() => {
                      setShowDetails(event.id);
                    }}
                  >
                    <Match data={event} key={event.id} />
                  </Pressable>
                </React.Fragment>
              );
            })}
          </View>

          {/* upcoming Matches */}
          <View style={styles.EventContainer}>
            <Pressable
              style={styles.upperRow}
              // onPress={() => {
              //   setQuery("upcomingAll");
              //   router.navigate("ShowAll");
              // }}
            >
              <Text style={styles.title}>Upcoming Matches</Text>
              <Text style={styles.seeAll}> See All </Text>
            </Pressable>

            {upcomingMatches.map((event, index) => {
              if (index < 2) return <Match data={event} key={event.id} />;
            })}
          </View>

          {/* Previous Matches */}
          <View style={styles.EventContainer}>
            <Pressable
              style={styles.upperRow}
              onPress={() => {
                setQuery("previousAll");
                router.navigate("ShowAll");
              }}
            >
              <Text style={styles.title}>Previous Matches</Text>
              <Text style={styles.seeAll}> See All </Text>
            </Pressable>

            {previousMatches.map((event, index) => {
              if (index < 2)
                return (
                  <React.Fragment key={event.id}>
                    <Pressable
                      onPress={() => {
                        setShowDetails(event.id);
                      }}
                    >
                      <Match data={event} key={event.id} />
                    </Pressable>
                  </React.Fragment>
                );
            })}
          </View>
        </ScrollView>

        {/* navigation */}
      </View>

      {/* the loading animation */}

      {loading ? <Loading /> : <></>}

      <Navigation active={"Home"} />
      {showDetails !== false ? <UpdatesPopup /> : <></>}
    </>
  );
}

export default Home;
