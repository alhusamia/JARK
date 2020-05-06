import React from "react";

import Icon from "react-native-vector-icons/Ionicons";

// Screen Names
import { SEARCHLIST, SEARCH } from "../../Navigation/screenNames";

const SearchButton = ({ navigation }) => {
  return (
    <>
      <Icon
        name="ios-search"
        size={25}
        style={{ marginRight: 15 }}
        onPress={() => navigation.navigate(SEARCH, { screen: SEARCHLIST })}
      />
    </>
  );
};

export default SearchButton;
