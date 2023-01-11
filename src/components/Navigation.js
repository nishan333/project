import { View, Text, Pressable } from "react-native";
import React from "react";

// importing the logos
import Home from "../../assets/svgs/home.svg";
import HomeB from "../../assets/svgs/homeB.svg";
import Football from "../../assets/svgs/football.svg";
import FootballB from "../../assets/svgs/footballB.svg";
import Chat from "../../assets/svgs/chat.svg";
import ChatB from "../../assets/svgs/chatB.svg";

// styles
import styles from "../styles/Navigation.js";

// external libraries
import { useNavigation } from "@react-navigation/native";

const Navigation = ({ active }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.navItem, styles.home]}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        {active === "Home" ? (
          <>
            <HomeB />
            <Text style={styles.txt}>Home</Text>
          </>
        ) : (
          <Home />
        )}
      </Pressable>

      <Pressable
        style={[styles.navItem, styles.chat]}
        onPress={() => {
          navigation.navigate("Chat");
        }}
      >
        {active === "Chat" ? (
          <>
            <ChatB />
            <Text style={styles.txt}>Chat</Text>
          </>
        ) : (
          <Chat />
        )}
      </Pressable>

      <Pressable
        style={[styles.navItem, styles.matches]}
        onPress={() => {
          navigation.navigate("ShowAll");
        }}
      >
        {active === "Matches" ? (
          <>
            <FootballB />
            <Text style={styles.txt}>Matches</Text>
          </>
        ) : (
          <Football />
        )}
      </Pressable>
    </View>
  );
};

export default Navigation;
