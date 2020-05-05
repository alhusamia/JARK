import * as React from "react";
import { Text, View, StyleSheet, Button, Modal, TextInput } from "react-native";
import Constants from "expo-constants";
import * as Permissions from "expo-permissions";

//action
import { Rent, UNRent } from "../../redux/actions";
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
    const { hasCameraPermission, scanned } = this.state;
    const { data } = this.state;
    const datanew = data.split(",");
    const obj = {
      productId: Number(datanew[0]),
      owner_id: Number(datanew[1]),
      renter_id: Number(datanew[2]),
      first_name: datanew[3],
      last_name: datanew[4],
      rentedItemId: Number(datanew[5]),
    };
    console.log(obj.rentedItemId);

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
              }}
            >
              {datanew.length === 5 ? (
                <>
                  <Text>
                    {obj.first_name} {obj.last_name} want to rent this item
                  </Text>
                  <Button
                    title="Accept"
                    onPress={() => {
                      this.props.Rent({
                        product: obj.productId,
                        tenant: obj.renter_id,
                      });
                      this.setState({ show: false });
                    }}
                  />
                </>
              ) : (
                <>
                  <Text>
                    {obj.first_name} {obj.last_name} want to return this item
                  </Text>
                  <Button
                    title="Return"
                    onPress={() => {
                      this.props.UNRent(obj.rentedItemId);
                      this.setState({ show: false });
                    }}
                  />
                </>
              )}
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  handleBarCodeScanned = ({ data }) => {
    const datanew = data.split(",");
    const obj = {
      productId: Number(datanew[0]),
      owner_id: Number(datanew[1]),
      renter_id: Number(datanew[2]),
      rentedItemId: Number(datanew[5]),
    };
    {
      this.props.route.params.profile.user.id !== obj.owner_id
        ? (this.setState({
            scanned: true,
            data: data,
          }),
          alert(`Sorry You are not the Owner`))
        : this.setState({
            scanned: true,
            show: true,
            data: data,
          });
    }
  };
}

const mapDispatchToProps = { Rent, UNRent };

export default connect(null, mapDispatchToProps)(Camera);
