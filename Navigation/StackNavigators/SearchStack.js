import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import { SEARCHLIST } from "../screenNames";
//Components
import SearchList from "../../Components/Search/SearchList";

const { Navigator, Screen } = createStackNavigator();

function SearchStack() {
  return (
    <Navigator>
      <Screen name={SEARCHLIST} component={SearchList} />
    </Navigator>
  );
}
export default SearchStack;
