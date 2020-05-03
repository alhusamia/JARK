import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
// Screens
import { USER, SEARCHLIST, HOME } from "./screenNames";
import UserStack from "./StackNavigators/UserStack";
import HomeStack from "../Navigation/StackNavigators/HomeStack";
import SearchList from "../Components/Search/SearchList";
import { connect } from "react-redux";

// const { Navigator, Screen } = createStackNavigator();
const { Navigator, Screen } = createDrawerNavigator();
function RootNavigator({ user }) {
  return (
    <Navigator initialRouteName={USER}>
      {!user ? (
        <Screen name={USER} component={UserStack} />
      ) : (
        <>
          <Screen name={USER} component={UserStack} /> {/* this screen is duplicated */}
          <Screen name={HOME} component={HomeStack} />
          <Screen name={SEARCHLIST} component={SearchList} />
        </>
      )}
    </Navigator>
  );
}

const mapStateToProps = ({ user }) => ({
  user,
});
export default connect(mapStateToProps)(RootNavigator);
// export default RootNavigator;
