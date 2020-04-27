import React, { Component } from "react";
import { Text, View, List, CardItem, Card, ListItem } from "native-base";
import { connect } from "react-redux";

// Components
import LogoutButton from "./LogoutButton";

import styles from "./styles";
import { render } from "react-dom";

class Profile extends Component {
  render() {
    const { profile } = this.props;
    console.log(profile, "Profile");

    return (
      <View>
        <Text
          style={{
            color: "black",
            fontSize: 30,
            fontWeight: "bold",
            opacity: 1,
            textAlign: "center",

            textShadowColor: "#FFD700",
            textShadowOffset: { width: 0, height: 0 },
            textShadowRadius: 8,
          }}
        >
          TTTTTTTTTHJJJJLK
        </Text>

        <LogoutButton />
      </View>
    );
  }
}

const mapStateToProps = ({ profile }) => ({
  profile,
});

export default connect(mapStateToProps)(Profile);
