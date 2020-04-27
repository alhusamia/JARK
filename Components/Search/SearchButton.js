import React from "react";

import Icon from "react-native-vector-icons/Ionicons";

// Screen Names
import { SEARCHLIST } from "../../Navigation/screenNames";

const SearchButton = ({ navigation }) => {
  return (
    <>
      <Icon
        name="ios-search"
        size={25}
        onPress={() => navigation.navigate(SEARCHLIST)}
      />
    </>
  );
};

export default SearchButton;
