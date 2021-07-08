import React, { Component } from "react";

import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

import AllProduct from "../AllProducts";
import Horizontal from "../Horizontal";
import Tab from "./Tab";

const { width } = Dimensions.get("window");

import { Transition, Transitioning } from "react-native-reanimated";

class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedTab: 0,
    };

    this.ref = React.createRef();
  }

  selectTab = (tabIndex) => {
    this.ref.current.animateNextTransition();

    this.setState({ selectedTab: tabIndex });
  };

  // should probably move this definition to inside the render() method.
  transition = (
    <Transition.Together>
      <Transition.In
        type="slide-right"
        durationMs={2000}
        interpolation="easeInOut"
      />

      <Transition.In type="fade" durationMs={2000} />

      <Transition.Change />

      <Transition.Out type="fade" duration={2000} />
    </Transition.Together>
  );

  componentDidMount = () => {
    this.ref.current.animateNextTransition();
  };

  render() {
    const { navigation } = this.props;
    return (
      <Transitioning.View
        ref={this.ref}
        transition={this.transition}
        style={{ flex: 1 }}
      >
        <View style={{ ...styles.tabContainer }}>
          <View
            style={[
              {
                position: "absolute",

                height: 70,

                width: (width - 30) / 2,

                backgroundColor: "#5dbcd2",

                left: this.state.selectedTab == 0 ? 0 : null,

                right: this.state.selectedTab == 1 ? 0 : null,
              },
            ]}
          />

          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => this.selectTab(0)}
          >
            <Tab
              icon="md-list"
              isSelected={this.state.selectedTab == 0 ? true : false}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => this.selectTab(1)}
          >
            <Tab
              icon="md-albums"
              isSelected={this.state.selectedTab == 1 ? true : false}
            />
          </TouchableOpacity>
        </View>

        {this.state.selectedTab == 0 ? (
          <AllProduct navigation={navigation} />
        ) : (
          <Horizontal navigation={navigation} />
        )}
      </Transitioning.View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",

    justifyContent: "center",
  },

  tabContainer: {
    height: 70,

    flexDirection: "row",

    marginTop: 15,

    borderRadius: 70,

    width: width - 30,

    marginHorizontal: 15,

    backgroundColor: "lightgrey",

    overflow: "hidden",
  },

  imageContainer: {
    flex: 1,

    flexDirection: "row",

    flexWrap: "wrap",

    justifyContent: "space-around",
  },
});
