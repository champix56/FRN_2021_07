import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import MainScreen from './components/MainScreen/MainScreen';
import MyButton from './components/MyButton/MyButton';
import store from './store/store';
class App extends Component {
  counter = 0;
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      screen: (
        <MainScreen
          onScreenSelection={selectedScreen =>
            this.setState({screen: selectedScreen})
          }
        />
      ),
    };
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
