import React, { Component } from "react";
import { View, Text, Button } from "native-base";
import {
  ActivityIndicator,
  // Button,
  Clipboard,
  Image,
  Share,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
} from "react-native";

import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { createProduct } from "../../redux/actions";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Entypo";
import IconNN from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/SimpleLineIcons";
import Icon4 from "react-native-vector-icons/MaterialIcons";
import { block } from "react-native-reanimated";

class CreateProduct extends Component {
  state = {
    image: null,
    uploading: false,
    name: "",
    description: "",
    show: false,
  };

  render() {
    let { name, description, image } = this.state;

    const newProduct = { name: name, description: description, image: image };
    return (
      <>
        <Icon
          name="add-to-list"
          onPress={() => {
            this.setState({ show: true });
          }}
          size={35}
          style={{ marginLeft: 330, marginTop: -45 }}
        />

        <Modal
          transparent={true}
          visible={this.state.show}
          animationType="slide"
        >
          <View
            style={{
              backgroundColor: "#000000aa",
              flex: 1,
              alignItems: "center",
            }}
          >
            <View
              style={{
                backgroundColor: "#ffffff",
                margin: 50,
                padding: 40,
                borderRadius: 10,
                marginTop: 200,
                height: 350,
                width: 350,
              }}
            >
              <IconNN
                name="closecircleo"
                size={30}
                style={{ marginLeft: 240, marginTop: -20 }}
                onPress={() => {
                  this.setState({ show: false });
                }}
              />
              <Text
                style={{
                  marginTop: -30,
                  marginBottom: 20,
                  fontSize: 20,
                  color: "#048c94",
                }}
              >
                Add your product
              </Text>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <TextInput
                  style={styles.TextInput}
                  placeholder="Product Name"
                  placeholderTextColor="#048c94"
                  value={name}
                  onChangeText={(name) => this.setState({ name })}
                />
                <TextInput
                  style={styles.TextInput}
                  placeholder="Description"
                  placeholderTextColor="#048c94"
                  value={description}
                  onChangeText={(description) => this.setState({ description })}
                />

                <Button style={styles.button1} onPress={this._pickImage}>
                  <Text style={{ marginLeft: -10, color: "#048c94" }}>
                    Pick an image from camera roll
                  </Text>
                  <Icon3
                    name="camera"
                    onPress={this._takePhoto}
                    size={25}
                    style={{ marginRight: 50 }}
                  />
                </Button>

                {this._maybeRenderImage()}
                {this._maybeRenderUploadingOverlay()}
                <Button
                  style={styles.button2}
                  onPress={() => {
                    this.props.createProduct(newProduct);
                    this.setState({ show: false });
                  }}
                >
                  <Text style={{ color: "white" }}>ADD</Text>
                  <Icon4 name="add" size={25} style={{ marginRight: 50 }} />
                </Button>
              </View>
            </View>
          </View>
        </Modal>
      </>
    );
  }

  _maybeRenderUploadingOverlay = () => {
    if (this.state.uploading) {
      return (
        <View style={[StyleSheet.absoluteFill, styles.maybeRenderUploading]}>
          <ActivityIndicator color="#fff" size="large" />
        </View>
      );
    }
  };

  _maybeRenderImage = () => {
    let { image } = this.state;

    if (!image) {
      return;
    }

    return (
      <View style={styles.maybeRenderContainer}>
        {/* <View style={styles.maybeRenderImageContainer}>
          <Image source={{ uri: image }} style={styles.maybeRenderImage} />
        </View> */}

        {/* <Text
          onPress={this._copyToClipboard}
          onLongPress={this._share}
          style={styles.maybeRenderImageText}
        >
          {image}
        </Text> */}
      </View>
    );
  };

  _share = () => {
    Share.share({
      message: this.state.image,
      title: "Check out this photo",
      url: this.state.image,
    });
  };

  _copyToClipboard = () => {
    Clipboard.setString(this.state.image);
    alert("Copied image URL to clipboard");
  };

  _takePhoto = async () => {
    const { status: cameraPerm } = await Permissions.askAsync(
      Permissions.CAMERA
    );

    const { status: cameraRollPerm } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    // only if user allows permission to camera AND camera roll
    if (cameraPerm === "granted" && cameraRollPerm === "granted") {
      let pickerResult = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      this._handleImagePicked(pickerResult);
    }
  };

  _pickImage = async () => {
    const { status: cameraRollPerm } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    // only if user allows permission to camera roll
    if (cameraRollPerm === "granted") {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3],
      });

      this._handleImagePicked(pickerResult);
    }
  };

  _handleImagePicked = async (pickerResult) => {
    let uploadResponse, uploadResult;

    try {
      this.setState({
        uploading: true,
      });

      if (!pickerResult.cancelled) {
        uploadResponse = await uploadImageAsync(pickerResult.uri);
        uploadResult = await uploadResponse.json();

        this.setState({
          image: uploadResult.location,
        });
      }
    } catch (e) {
      // console.log({ uploadResponse });
      // console.log({ uploadResult });
      // console.log({ e });
      alert("Upload failed, sorry :(");
    } finally {
      this.setState({
        uploading: false,
      });
    }
  };
}

async function uploadImageAsync(uri) {
  let apiUrl = "https://file-upload-example-backend-dkhqoilqqn.now.sh/upload";

  // Note:
  // Uncomment this if you want to experiment with local server
  //
  // if (Constants.isDevice) {
  //   apiUrl = `https://your-ngrok-subdomain.ngrok.io/upload`;
  // } else {
  //   apiUrl = `http://localhost:3000/upload`
  // }

  let uriParts = uri.split(".");
  let fileType = uriParts[uriParts.length - 1];

  let formData = new FormData();
  formData.append("photo", {
    uri,
    name: `photo.${fileType}`,
    type: `image/${fileType}`,
  });

  let options = {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  };

  return fetch(apiUrl, options);
}
const mapDispatchToProps = { createProduct };
export default connect(null, mapDispatchToProps)(CreateProduct);
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  exampleText: {
    fontSize: 20,
    marginBottom: 20,
    marginHorizontal: 15,
    textAlign: "center",
  },
  maybeRenderUploading: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
  },
  maybeRenderContainer: {
    borderRadius: 3,
    elevation: 2,
    marginTop: 30,
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 4,
      width: 4,
    },
    shadowRadius: 5,
    width: 250,
  },
  maybeRenderImageContainer: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    overflow: "hidden",
    alignItems: "center",
  },
  maybeRenderImage: {
    height: 200,
    width: 200,
  },
  maybeRenderImageText: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  TextInput: {
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: "#048c94",
    width: 300,
  },
  button1: {
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: "#048c94",
    width: 300,
    backgroundColor: "white",
    // marginBottom: 20,
  },
  button2: {
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginVertical: 5,
    borderColor: "#048c94",
    width: 120,
    backgroundColor: "#048c94",
    // marginBottom: -30,
  },
});
