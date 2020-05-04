import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import {
  PROFILE,
  RENT,
  RENTDETAIL,
  CAMERA,
  WAITDETAIL,
  TENANTPROFILE,
} from "../screenNames";
//Components
import Profile from "../../Components/Profile";
import RentDetail from "../../Components/RentDetail/RentDetail";
import Rents from "../../Components/Rent/Rents";
import Camera from "../../Components/Camera";
import Waiting from "../../Components/RentDetail/Waiting";
import tenantProfile from "../../Components/OwnerProfile/tenantProfile";

const { Navigator, Screen } = createStackNavigator();

function ProfileStack() {
  return (
    <Navigator>
      <Screen name={PROFILE} component={Profile} />
      <Screen name={CAMERA} component={Camera} />
      <Screen name={RENT} component={Rents} />
      <Screen name={RENTDETAIL} component={RentDetail} />
      <Screen name={TENANTPROFILE} component={tenantProfile} />
      <Screen name={WAITDETAIL} component={Waiting} />
    </Navigator>
  );
}
export default ProfileStack;
