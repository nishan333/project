import { View, Text, TextInput, Pressable } from "react-native";
import React, { useContext, useRef } from "react";

// icon
import SearchIcon from "../../assets/svgs/search.svg";

// styles
import styles from "../styles/components/SearchBox.js";

// context
import { cp } from "../../Context";

const SearchBox = () => {
  const {
    search: [, setQuery],
  } = useContext(cp);

  const input = useRef(null);

  const handleSearch = (e) => {
    setQuery(e);
  };
  return (
    <View style={styles.searchCon}>
      <TextInput
        ref={input}
        placeholder="Argentina vs Brazil"
        style={styles.txtInput}
        onChangeText={handleSearch}
        placeholderTextColor={"#686868"}
      />
      <Pressable style={styles.btn} onPress={handleSearch}>
        <SearchIcon />
      </Pressable>
    </View>
  );
};

export default SearchBox;
