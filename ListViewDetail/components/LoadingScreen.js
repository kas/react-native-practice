import React from 'react';

import { ActivityIndicator, StatusBar, View } from 'react-native';

import AppStyle from '../AppStyle';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  bootstrapAsync() {
    setTimeout(() => {
      this.props.navigation.navigate('App');
    }, 1000);
  }

  render() {
    return (
      <View style={AppStyle.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
