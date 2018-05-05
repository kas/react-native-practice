// TODO show more pokemon via next property

import React from 'react';

import { ActivityIndicator, FlatList, View } from 'react-native';

import Pokemon from './Pokemon';
import SomethingWentWrong from './SomethingWentWrong';

import AppStyle from '../AppStyle';

export default class extends React.Component {
  static navigationOptions = {
    title: 'Pokemon',
  };

  state = { isLoading: true, pokemon: [] };

  componentDidMount() {
    this.getPokemonFromApi();
  }

  onPressPokemon = (pokemon) => {
    this.props.navigation.navigate('Detail', { name: pokemon.name, url: pokemon.url });
  };

  getPokemonFromApi = async () => {
    this.setState({ isLoading: true });
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon');
      const responseJson = await response.json();
      this.setState({ isLoading: false, pokemon: responseJson.results });
    } catch (error) {
      console.error(error);
      this.setState({ isLoading: false });
    }
  };

  renderItem = ({ item }) => {
    const pokemonName = `${item.name[0].toUpperCase()}${item.name.slice(1)}`;

    return <Pokemon name={pokemonName} onPressItem={this.onPressPokemon} url={item.url} />;
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={AppStyle.view}>
          <ActivityIndicator />
        </View>
      );
    }

    if (!this.state.isLoading && this.state.pokemon.length === 0) {
      return <SomethingWentWrong onPress={this.getPokemonFromApi} />;
    }

    return (
      <View style={AppStyle.listViewScreenView}>
        <FlatList data={this.state.pokemon} renderItem={this.renderItem} />;
      </View>
    );
  }
}
