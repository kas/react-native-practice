import React from 'react';

import { Text, TouchableOpacity, View } from 'react-native';

import AppStyle from '../AppStyle';

export default class extends React.PureComponent {
  onPress = () => {
    const pokemon = { name: this.props.name, url: this.props.url };
    this.props.onPressItem(pokemon);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View>
          <Text style={AppStyle.pokemonText}>{this.props.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
