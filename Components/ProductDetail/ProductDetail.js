import React from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import { Button, Right } from "native-base";

import { connect } from "react-redux";

import styles from "./styles";

import { addProductToRentList } from "../../redux/actions";

class ProductDetail extends React.Component {
  render() {
    const { product } = this.props.route.params;
    const { addProductToRentList } = this.props;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.carouselContainer}>
          <View>
            <TouchableHighlight>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: product.image }} />
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.Container}>
          <Text style={styles.infoName}>{product.name}</Text>

          <View style={styles.infoContainer}>
            <Text style={styles.infoDescription}>{product.description}</Text>
          </View>
          <Text style={styles.infoDescription}>{product.owner}</Text>
          <Right>
            <Button
              dark
              style={styles.ItemContainer}
              onPress={() => addProductToRentList(product)}
            >
              <Text style={{ color: "white" }}>Rent</Text>
            </Button>
          </Right>
        </View>
      </ScrollView>
    );
  }
}
// const mapDispatchToProps = { addProductToRentList };
const mapDispatchToProps = (dispatch) => ({
  addProductToRentList: (product) => dispatch(addProductToRentList(product)),
});
export default connect(null, mapDispatchToProps)(ProductDetail);
// export default ProductDetail;
