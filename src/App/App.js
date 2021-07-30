import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MainScreen from './components/MainScreen/MainScreen';
import MyButton from './components/MyButton/MyButton';
import store, {navInitialState} from './store/store';
class App extends Component {
  counter = 0;
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      screen: null,
      //<MainScreen></MainScreen>,
    };
    store.dispatch({type: 'SET_SCREEN', value: <MainScreen />});
  }
  componentDidMount() {
    this.setState({
      screen: store.getState().navigation.screen,
      products: store.getState().stock.products,
    });
    store.subscribe(() => {
      this.setState({
        screen: store.getState().navigation.screen,
        products: store.getState().stock.products,
      });
    });
  }
  componentDidUpdate() {
    console.log("une mise a jour d'etat a ete effectuee", this.state);
  }
  render() {
    return this.state.screen;
  }
}

const styles = StyleSheet.create({});

export default App;
