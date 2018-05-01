import React from 'react';

import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native';

import AppStyle from '../AppStyle';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const usernameToken = await AsyncStorage.getItem('usernameToken');
    this.props.navigation.navigate(usernameToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <View style={AppStyle.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
