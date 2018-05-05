import React from 'react';

import { Button, Text, View } from 'react-native';

import AppStyle from '../AppStyle';

export default props => (
  <View style={AppStyle.view}>
    <Text>Something went wrong.</Text>
    <Button onPress={props.onPress} title="Tap to retry" />
  </View>
);
