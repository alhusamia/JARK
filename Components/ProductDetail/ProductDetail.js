import React from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import { Button, Right, Thumbnail } from "native-base";
import Slideshow from "react-native-image-slider-show";
import { connect } from "react-redux";
import { StyleSheet } from "react-native";
import styles from "./styles";

import { addProductToRentList } from "../../redux/actions";
import { getOwnerProfile } from "../../redux/actions";
import { OWNERPROFILE } from "../../Navigation/screenNames";

class ProductDetail extends React.Component {
  render() {
    const { product } = this.props.route.params;
    const { addProductToRentList, navigation } = this.props;
    console.log(product.image);
    return (
      <ScrollView style={styles.container}>
        <View style={styles.carouselContainer}>
          <View>
            <TouchableHighlight>
              <View style={styles.imageContainer}>
                <Slideshow
                  dataSource={[
                    { url: product.image },
                    { url: product.image2 },
                    { url: product.image3 },
                    { url: product.image4 },
                  ]}
                  height={300}
                  scrollEnabled={true}
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.Container}>
          <Text style={styles.infoName}>{product.name}</Text>
          <View style={styles.hairline}></View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoDescription}>{product.description}</Text>
          </View>

          <View style={styles.Container}>
            <Text style={styles.text1}>
              Owner: {product.owner.user.username}
            </Text>
            <Thumbnail source={{ uri: product.owner.image }} />
            <Button
              style={styles.buttons1}
              onPress={() => navigation.navigate(OWNERPROFILE, { product })}
            >
              <Text style={styles.text}>Visit Profile</Text>
            </Button>
          </View>

          <Right>
            <Button
              style={styles.buttons}
              onPress={() => addProductToRentList(product)}
            >
              <Text style={styles.text}>RENT NOW</Text>
            </Button>
          </Right>
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addProductToRentList: (product) => dispatch(addProductToRentList(product)),
  getOwnerProfile: (ProfileID) => dispatch(getOwnerProfile(ProfileID)),
});
export default connect(null, mapDispatchToProps)(ProductDetail);
