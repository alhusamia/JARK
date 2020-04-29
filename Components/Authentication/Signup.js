import React, { Component } from "react";

// Screen Names
import { LOGIN, USER } from "../../Navigation/screenNames";

// Styling Components
import { TextInput, TouchableOpacity, View } from "react-native";
import { Text } from "native-base";
import styles from "./styles";
import { connect } from "react-redux";

import { signup } from "../../redux/actions";

class Signup extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  };

  render() {
    const { navigation, signup } = this.props;
    const { username, password, first_name, last_name, email } = this.state;
    const { errors } = this.props;

    return (
      <View style={styles.authContainer}>
        <Text style={styles.authTitle}>Signup</Text>
        {!!errors.length && (
          <View className="alert alert-danger" role="alert">
            {errors.map((error) => (
              <Text key={error}>{error}</Text>
            ))}
          </View>
        )}
        <TextInput
          style={styles.authTextInput}
          placeholder="First Name"
          placeholderTextColor="#A6AEC1"
          value={first_name}
          onChangeText={(first_name) => this.setState({ first_name })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Last Name"
          placeholderTextColor="#A6AEC1"
          value={last_name}
          onChangeText={(last_name) => this.setState({ last_name })}
        />

        <TextInput
          style={styles.authTextInput}
          placeholder="Email"
          placeholderTextColor="#A6AEC1"
          value={email}
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Username"
          placeholderTextColor="#A6AEC1"
          value={username}
          onChangeText={(username) => this.setState({ username })}
        />
        <TextInput
          style={styles.authTextInput}
          placeholder="Password"
          placeholderTextColor="#A6AEC1"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => this.setState({ password })}
        />
        <TouchableOpacity
          style={styles.authButton}
          onPress={() => signup(this.state)}
        >
          <Text style={styles.authButtonText}>Sign up</Text>
        </TouchableOpacity>
        <Text
          style={styles.authOther}
          onPress={() => navigation.replace(USER, { screen: LOGIN })}
        >
          Click here to log in!
        </Text>
      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    errors: state.errors.errors,
  };
};
const mapDispatchToProps = { signup };

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
