import React, { Component, useState } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  Button,
} from "react-native";

class CreateProduct extends Component {
  // const [modalVisible, setModalVisible] = useState(false);
  state = {
    show: false,
  };
  render() {
    return (
      <>
        <Button
          title="show model"
          onPress={() => {
            this.setState({ show: true });
          }}
        />
        <Modal transparent={true} visible={this.state.show}>
          <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
            <View
              style={{
                backgroundColor: "#ffffff",
                margin: 50,
                padding: 40,
                borderRadius: 10,
                flex: 1,
              }}
            >
              <Text>What Ever</Text>
              <Button
                title="hide modal"
                onPress={() => {
                  this.setState({ show: false });
                }}
              />
            </View>
          </View>
        </Modal>
      </>
    );
  }
}
export default CreateProduct;
