import React from 'react';

import { ActivityIndicator, Image, Text, View } from 'react-native';

import SomethingWentWrong from './SomethingWentWrong';

import AppStyle from '../AppStyle';

export default class extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name,
  });

  state = { isLoading: true, pokemonDetails: {} };

  componentDidMount() {
    this.getPokemonDetailsFromApi();
  }

  getPokemonDetailsFromApi = async () => {
    this.setState({ isLoading: true });
    try {
      const response = await fetch(this.props.navigation.state.params.url);
      const responseJson = await response.json();
      this.setState({ isLoading: false, pokemonDetails: responseJson });
    } catch (error) {
      console.error(error);
      this.setState({ isLoading: false });
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={AppStyle.view}>
          <ActivityIndicator />
        </View>
      );
    }

    if (!this.state.isLoading && Object.keys(this.state.pokemonDetails).length === 0) {
      return <SomethingWentWrong onPress={this.getPokemonDetailsFromApi} />;
    }

    if (!this.state.pokemonDetails.sprites.front_default) {
      return (
        <View style={AppStyle.view}>
          <Text>Image not found.</Text>
        </View>
      );
    }

    return (
      <View style={AppStyle.view}>
        <Image
          style={AppStyle.detailScreenImage}
          source={{ uri: this.state.pokemonDetails.sprites.front_default }}
        />
      </View>
    );
  }
}
