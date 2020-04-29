import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { connect } from "react-redux";

// Screens
import {
  LOGIN,
  SIGNUP,
  PROFILE,
  LISTOFRENT,
  RENT,
  RENTDETAIL,
} from "../screenNames";
import Login from "../../Components/Authentication/Login";
import Signup from "../../Components/Authentication/Signup";
import Profile from "../../Components/Profile";
import ListOfRent from "../../Components/Profile/ListOfRent";

import RentDetail from "../../Components/RentDetail/RentDetail";
import Rents from "../../Components/Rent/Rents";
import { createDrawerNavigator } from "@react-navigation/drawer";
const { Navigator, Screen } = createDrawerNavigator();

// const { Navigator, Screen } = createStackNavigator();

function DraweStack({ user }) {
  return (
    <Navigator
      initialRouteName={PROFILE}
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
        },
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTintColor: "white",
      }}
    >
      <Screen
        name={PROFILE}
        component={Profile}
        options={{ headerShown: false }}
      />
      <Screen name={SEARCHLIST} component={SearchList} />
      <Screen
        name={MAIN}
        component={Home}
        options={({ navigation }) => {
          return {
            headerRight: () => <SearchButton navigation={navigation} />,
          };
        }}
      />
      )}
    </Navigator>
  );
}
const mapStateToProps = ({ user }) => ({
  user,
});
export default connect(mapStateToProps)(DraweStack);
// export default UserStack;
