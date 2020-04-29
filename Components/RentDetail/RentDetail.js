import React from "react";
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableHighlight,
} from "react-native";
import QRCode from "react-native-qrcode-generator";

import styles from "./styles";

class RentDetail extends React.Component {
  state = {
    data: `Product Name:${this.props.route.params.product.name} \n Owner:${this.props.route.params.product.owner}\n Renter:${this.props.route.params.profile.first_name} ${this.props.route.params.profile.last_name}`,
  };

  render() {
    const { product, profile } = this.props.route.params;

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
          <QRCode
            value={this.state.data}
            size={200}
            bgColor="black"
            fgColor="white"
          />
        </View>
      </ScrollView>
    );
  }
}

export default RentDetail;
