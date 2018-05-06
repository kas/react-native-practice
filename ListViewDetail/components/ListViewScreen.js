import React from 'react';

import { ActivityIndicator, FlatList, Text, View } from 'react-native';

import Pokemon from './Pokemon';
import SomethingWentWrong from './SomethingWentWrong';

import AppStyle from '../AppStyle';

const DEFAULT_API_URL = 'https://pokeapi.co/api/v2/pokemon';

export default class extends React.Component {
  static navigationOptions = {
    title: 'Pokemon',
  };

  state = { isLoading: true, nextApiUrl: '', pokemon: [] };

  componentDidMount() {
    this.getPokemonFromApi();
  }

  onPressPokemon = (pokemon) => {
    this.props.navigation.navigate('Detail', { name: pokemon.name, url: pokemon.url });
  };

  onEndReached = () => {
    this.getPokemonFromApi(this.state.nextApiUrl);
  };

  getPokemonFromApi = async (url = DEFAULT_API_URL) => {
    if (url === DEFAULT_API_URL) {
      this.setState({ isLoading: true });
    }

    try {
      const response = await fetch(url);
      const responseJson = await response.json();
      this.setState(state => ({
        isLoading: false,
        nextApiUrl: responseJson.next,
        pokemon: [...state.pokemon, ...responseJson.results],
      }));
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
        <FlatList
          data={this.state.pokemon}
          keyExtractor={pokemon => pokemon.name}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={0}
          renderItem={this.renderItem}
        />;
      </View>
    );
  }
}
