import * as React from "react";
import { Text, View, StyleSheet, Button, Modal, TextInput } from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

//action
import { Rent } from "../../redux/actions";
import { connect } from "react-redux";

import { BarCodeScanner } from "expo-barcode-scanner";

class Camera extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
    show: false,
    time: "",
    data: "",
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted",
    });
  };

  render() {
    const { hasCameraPermission, scanned, user } = this.state;
    const { time, data } = this.state;
    const { profile } = this.props.route.params;
    const datanew = data.split(" \n ");
    const obj = {
      productId: Number(datanew[0]),
      owner: datanew[1],
      renter: datanew[2],
    };
    
    console.log(obj);

    if (hasCameraPermission === null) {
      return <Text> Requesting for camera permission </Text>;
    }
    if (hasCameraPermission === false) {
      return <Text> No access to camera </Text>;
    }
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() =>
              this.setState({
                scanned: false,
              })
            }
          />
        )}
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
              <Text>{data}</Text>
              <TextInput
                placeholder="Rent Duration"
                placeholderTextColor="#A6AEC1"
                value={time}
                onChangeText={(time) => this.setState({ time })}
              />

              <Button
                title="Rent"
                onPress={() => {
                  this.props.Rent({ product: Number(data) });
                  this.setState({ show: false });
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  handleBarCodeScanned = ({ data }) => {
    const datanew = data.split(" \n ");
    const obj = {
      productId: Number(datanew[0]),
      owner: datanew[1],
      renter: datanew[2],
    };
    {
      this.props.route.params.profile.user.username !== obj.owner
        ? (this.setState({
            scanned: true,
            data: data,
          }),
          alert(
            `Sorry You are not the Owner\n${this.props.route.params.profile.user.username} \n ${obj.owner_id}`
          ))
        : this.setState({
            scanned: true,
            show: true,
            data: data,
          });
    }
    // this.setState({
    //   scanned: true,
    //   show: true,
    //   data: data,
    // });
  };
}

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = { Rent };

export default connect(mapStateToProps, mapDispatchToProps)(Camera);
