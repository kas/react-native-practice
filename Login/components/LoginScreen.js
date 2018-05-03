import React from 'react';

import { AsyncStorage, Button, Text, TextInput, View } from 'react-native';

import Toast from 'react-native-easy-toast';

import AppStyle from '../AppStyle';

export default class extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    password: '',
    username: '',
  };

  onPressSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  onPressForgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword');
  };

  isAuthenticated = () => {
    let isAuthenticated = false;

    if (this.state.username === 'username' && this.state.password === 'password') {
      isAuthenticated = true;
    }

    return isAuthenticated;
  };

  logInAsync = async () => {
    if (this.isAuthenticated()) {
      await AsyncStorage.setItem('usernameToken', this.state.username);
      this.props.navigation.navigate('App');
    } else {
      this.refs.toast.show('Authentication failed. Try "username" and "password".', 1000);
    }
  };

  render() {
    return (
      <View style={AppStyle.view}>
        <Text>Username</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          autoFocus
          onChangeText={username => this.setState({ username })}
          placeholder="Enter username here"
          style={AppStyle.loginScreenTextInput}
        />
        <Text>Password</Text>
        <TextInput
          onChangeText={password => this.setState({ password })}
          onSubmitEditing={this.logInAsync}
          placeholder="Enter password here"
          secureTextEntry
          style={AppStyle.loginScreenTextInput}
        />
        <Button
          accessibilityLabel="Log in to the app using the above username and password fields"
          onPress={this.logInAsync}
          title="Log In"
        />
        <Button onPress={this.onPressSignUp} title="Sign Up" />
        <Button onPress={this.onPressForgotPassword} title="Forgot Password" />
        <Toast ref="toast" style={AppStyle.loginScreenToast} />
      </View>
    );
  }
}
