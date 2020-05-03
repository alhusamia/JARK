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
    data: `${this.props.route.params.product.product.id},${this.props.route.params.product.product.owner.user.id},${this.props.route.params.profile.user.id},${this.props.route.params.profile.user.first_name},${this.props.route.params.profile.user.last_name} `,
  };

  render() {
    const { product, profile } = this.props.route.params;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.carouselContainer}>
          <View>
            <TouchableHighlight>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.image}
                  source={{ uri: product.product.image }}
                />
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.Container}>
          <Text style={styles.infoName}>{product.product.name}</Text>

          <View style={styles.infoContainer}>
            <Text style={styles.infoDescription}>
              {product.product.description}
            </Text>
          </View>
          <Text style={styles.infoDescription}>
            The Owner is :{product.product.owner.user.username}
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
