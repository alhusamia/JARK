import React, { Component, useState } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  Button,
  TextInput,
  Image,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";
import { createProduct } from "../../redux/actions";
import { connect } from "react-redux";
import styles from "./styles";
// import { Icon } from "react-native-vector-icons/Icon";
import Icon from "react-native-vector-icons/Entypo";
class CreateProduct extends Component {
  // const [modalVisible, setModalVisible] = useState(false);
  state = {
    show: false,
    name: "",
    description: "",
    image: null,
  };

  componentDidMount() {
    this.getPermissionAsync();
  }
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      }
    }
  };
  _pickImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ image: result.uri });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
  render() {
    const { name, description, image } = this.state;

    const newProduct = { name: name, description: description, image: image };
    return (
      <>
        <Icon
          name="add-to-list"
          onPress={() => {
            this.setState({ show: true });
          }}
          size={35}
          style={{ marginLeft: 250, marginTop: -45 }}
        />
        <Modal transparent={true} visible={this.state.show}>
          <View style={{ backgroundColor: "#000000aa", flex: 1 }}>
            <View
              style={{
                backgroundColor: "#ffffff",
                margin: 50,
                padding: 40,
                borderRadius: 10,
                marginTop: 200,
                height: 400,
              }}
            >
              <Text>Add your product</Text>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TextInput
                  style={styles.authTextInput}
                  placeholder="Product Name"
                  placeholderTextColor="#A6AEC1"
                  value={name}
                  onChangeText={(name) => this.setState({ name })}
                />
                <TextInput
                  style={styles.authTextInput}
                  placeholder="Description"
                  placeholderTextColor="#A6AEC1"
                  value={description}
                  onChangeText={(description) => this.setState({ description })}
                />
                {/* <Text> */}
                <Button
                  style={styles.authTextInput}
                  title="Choose Image"
                  onPress={this._pickImage}
                />
                {/* </Text> */}
              </View>
              <Button
                title="hide modal"
                onPress={() => {
                  this.setState({ show: false });
                }}
              />
              <Button
                title="Add"
                onPress={() => {
                  this.props.createProduct(newProduct);
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
const mapDispatchToProps = { createProduct };
export default connect(null, mapDispatchToProps)(CreateProduct);
