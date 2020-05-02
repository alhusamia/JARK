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
    data: `${this.props.route.params.product.id}\n${this.props.route.params.product.owner.user.username}\n${this.props.route.params.profile.user.username}\n${this.props.route.params.profile.user.first_name}\n${this.props.route.params.profile.user.last} `,
  };

  render() {
    const { product, profile } = this.props.route.params;
    console.log(product);

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
          <Text style={styles.infoDescription}>
            {product.owner.user.username}
          </Text>
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
