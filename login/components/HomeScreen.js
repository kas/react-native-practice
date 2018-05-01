import React from 'react';

import { AsyncStorage, Button, Text, View } from 'react-native';

export default class extends React.Component {
  static navigationOptions = ({ navigation, navigationOptions }) => {
    const params = navigation.state.params || {};

    return {
      title: params.title || 'Authenticated',
      headerLeft: null,
      headerRight: (
        <Button
          onPress={params.increaseCount}
          title="+1"
          color={navigationOptions.headerTintColor}
        />
      ),
    };
  };

  state = {
    count: 0,
  };

  componentWillMount() {
    this.props.navigation.setParams({ increaseCount: this.increaseCount });
  }

  componentDidMount() {
    this.setUsername();
  }

  onPressModal = () => {
    this.props.navigation.navigate('Modal');
  };

  onPressOther = () => {
    this.props.navigation.navigate('Other');
  };

  setUsername = async () => {
    const usernameToken = await AsyncStorage.getItem('usernameToken');
    this.setState({ username: usernameToken });
  };

  logOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <View>
        <Text>You are authenticated!</Text>
        <Text>Username: {this.state.username}</Text>
        <Text>The current count is: {this.state.count}</Text>
        <Button onPress={this.onPressModal} title="Modal" />
        <Button onPress={this.onPressOther} title="Other" />
        <Button
          onPress={() => this.props.navigation.setParams({ title: 'Updated' })}
          title="Update the Title"
        />
        <Button
          accessibilityLabel="Log out of the app"
          onPress={this.logOutAsync}
          title="Log Out"
        />
      </View>
    );
  }
}
