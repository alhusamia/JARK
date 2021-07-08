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

  // a single handleChange() can be used to handle all onChangeText events below
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
          style={styles.TextInput}
          placeholder="First Name"
          placeholderTextColor="black"
          value={first_name}
          onChangeText={(first_name) => this.setState({ first_name })}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Last Name"
          placeholderTextColor="black"
          value={last_name}
          onChangeText={(last_name) => this.setState({ last_name })}
        />

        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="black"
          value={email}
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Username"
          placeholderTextColor="black"
          value={username}
          onChangeText={(username) => this.setState({ username })}
        />
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="black"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => this.setState({ password })}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => signup(this.state)}
        >
          <Text style={styles.authButtonText}>Sign up</Text>
        </TouchableOpacity>
        <Text
          style={styles.authOther}
          onPress={() => navigation.replace(LOGIN)}
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
