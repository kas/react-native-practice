import React from 'react';

import { Button, Text, View } from 'react-native';

import AppStyle from '../AppStyle';

export default props => (
  <View style={AppStyle.view}>
    <Text style={AppStyle.modalScreenText}>This is a modal!</Text>
    <Button onPress={() => props.navigation.goBack()} title="Dismiss" />
  </View>
);
