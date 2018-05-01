import React from 'react';

import { Text, View } from 'react-native';

import AppStyle from '../AppStyle';

export default class extends React.Component {
  static navigationOptions = {
    title: 'ListView',
  };

  componentDidMount() {
    // fetch data from API
  }

  render() {
    return (
      <View style={AppStyle.container}>
        <Text>Welcome to ListViewScreen!</Text>
      </View>
    );
  }
}
