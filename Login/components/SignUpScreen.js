import React from 'react';

import { Text, View } from 'react-native';

import AppStyle from '../AppStyle';

export default class extends React.Component {
  static navigationOptions = {
    title: 'Sign Up',
  };

  render() {
    return (
      <View style={AppStyle.container}>
        <Text>Sign Up</Text>
      </View>
    );
  }
}
