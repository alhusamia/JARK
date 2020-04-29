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
  MENU,
  CREATEPRODUCT,
} from "../screenNames";
import Login from "../../Components/Authentication/Login";
import Signup from "../../Components/Authentication/Signup";
import Profile from "../../Components/Profile";

import RentDetail from "../../Components/RentDetail/RentDetail";
import Rents from "../../Components/Rent/Rents";

import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerStack from "./DrawerStack";
const { Navigator, Screen } = createDrawerNavigator();

import Camera from "../../Components/Camera";
import CreateProduct from "../../Components/CreateProduct";

// const { Navigator, Screen } = createStackNavigator();

function UserStack({ user }) {
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
      {!user ? (
        <>
          <Screen
            name={LOGIN}
            component={Login}
            options={{ headerShown: false }}
          />
          <Screen
            name={SIGNUP}
            component={Signup}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Screen
            name={PROFILE}
            component={Profile}
            options={{ headerShown: false }}
          />
          <Screen
            name={LISTOFRENT}
            component={Camera}
            options={{ headerShown: false }}
          />
          <Screen
            name={RENT}
            component={Rents}
            options={{ headerShown: false }}
          />
          <Screen
            name={RENTDETAIL}
            component={RentDetail}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Navigator>
  );
}
const mapStateToProps = ({ user }) => ({
  user,
});
export default connect(mapStateToProps)(UserStack);
// export default UserStack;
