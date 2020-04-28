import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import {
  ListItem,
  Text,
  Body,
  Right,
  Button,
  Content,
  List,
} from "native-base";
import { connect } from "react-redux";

// Screens
import { PRODUCT } from "../../Navigation/screenNames";

// Style
import styles from "./styles";
import Product from "../Product/Product";
class ListOfRent extends Component {
  render() {
    const { listofrents, navigation } = this.props;
    // console.log(listofrents);
    const products = listofrents.map((product) => (
      <ImageBackground
        source={{ uri: product.image }}
        style={styles.background}
      >
        <View style={styles.overlay} />
        <ListItem
          button
          style={styles.listitem}
          onPress={() => navigation.navigate(PRODUCT, { product })}
        >
          <Body>
            <Text style={styles.text}>{product.name}</Text>
          </Body>
          <Right>
            <Text style={styles.text1}>{product.owner}</Text>
          </Right>
        </ListItem>
      </ImageBackground>
    ));
    return (
      <Content>
        <List>{products}</List>
      </Content>
    );
  }
}
const mapStateToProps = ({ listofrents }) => ({
  listofrents,
});
export default connect(mapStateToProps)(ListOfRent);
