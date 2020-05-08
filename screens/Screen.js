import React from "react";
import {
  View,
  Text,
  StylesSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Home from '../Navigation/StackNavigators/HomeStack'
import Search from '../Components/Search/SearchList'
import Profile from '../Components/Profile/index'
import Listing from '../Components/Listing'
import { HOME } from "../Navigation/screenNames";
export default class Screen extends React.Component {
  select_component(){
    if(this.props.name === "Home") return  <Listing/>
    else if(this.props.name === "Search") return <Search/>
    else if(this.props.name === "Profile") return <Profile/>
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <SafeAreaView style={{ flex: 1 }}>
          <TouchableOpacity
            style={{ alignItems: "flex-end", margin: 16 }}
            onPress={this.props.navigation.openDrawer}
          >
            <FontAwesome5 name="bars" size={24} color="#161924" />
          </TouchableOpacity>
          {/* <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          > */}
            {this.select_component()}
          {/* </View> */}
        </SafeAreaView>
      </View>
    );
  }
}
// const styles = StylesSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   text: {
//     color: "#161924",
//     fontSize: 20,
//     fontWeight: "500",
//   },
// });
