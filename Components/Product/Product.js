import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import { ListItem, Text, Right, Left } from "native-base";

// Screens
import { PRODUCT_DETAIL } from "../../Navigation/screenNames";

// Style
import styles from "./styles";

class Product extends Component {
  render() {
    const { product, navigation } = this.props;

    return (
      <ImageBackground
        source={{ uri: product.image }}
        style={styles.background}
      >
        <View style={styles.overlay} />
        <ListItem
          button
          style={styles.listitem}
          onPress={() => navigation.navigate(PRODUCT_DETAIL, { product })}
        >
          <Left>
            <Text style={styles.text}>{product.name}</Text>
          </Left>
          <Right>
            <Text style={styles.text1}>{product.owner.user.username}</Text>
          </Right>
        </ListItem>
      </ImageBackground>
    );
  }
}

export default Product;
