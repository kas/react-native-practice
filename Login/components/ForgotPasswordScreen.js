import React from 'react';

import { Text, View } from 'react-native';

import AppStyle from '../AppStyle';

export default class extends React.Component {
  static navigationOptions = {
    title: 'Forgot Password',
  };

  render() {
    return (
      <View style={AppStyle.view}>
        <Text>Forgot Password</Text>
      </View>
    );
  }
}
