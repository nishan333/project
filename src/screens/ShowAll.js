import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useContext } from "react";

// components
import Navigation from "../components/Navigation.js";
import SearchBox from "../components/SearchBox.js";
import NoSearch from "../components/NoSearch.js";

// context
import { cp } from "../../Context.js";
import Match from "../components/Match.js";

const ShowAll = ({ navigation }) => {
  const {
    search: [query],
    output: [result],
    events: { upNext: upcomingMatches, pre: previousMatches },
    popup: [showDetails, setShowDetails],
  } = useContext(cp);
  return (
    <>
      <SearchBox />

      {!query || query?.length === 0 ? (
        <NoSearch />
      ) : (
        <ScrollView>
          <View
            style={{
              paddingBottom: 100,
              backgroundColor: "#e8e8e8",
            }}
          >
            {query === "previousAll"
              ? previousMatches.map((event, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Pressable
                        onPress={() => {
                          setShowDetails(event.id);
                        }}
                        key={event.id}
                      >
                        <Match data={event} />
                      </Pressable>
                    </React.Fragment>
                  );
                })
              : query === "upcomingAll"
              ? upcomingMatches.map((event, index) => {
                  return <Match data={event} key={event.id} />;
                })
              : result.map((event, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Pressable
                        onPress={() => {
                          setShowDetails(event.id);
                        }}
                        key={event.id}
                      >
                        <Match data={event} />
                      </Pressable>
                    </React.Fragment>
                  );
                })}
          </View>
        </ScrollView>
      )}
      <Navigation active="Matches" />
    </>
  );
};

export default ShowAll;
