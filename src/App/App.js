import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MainScreen from './components/MainScreen/MainScreen';
import MyButton from './components/MyButton/MyButton';

class App extends Component {
  counter = 0;
  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }
  componentDidUpdate() {
    console.log("une mise a jour d\'etat a ete effectuee", this.state);
  }
  render() {
    return <MainScreen/>;
  }
}

const styles = StyleSheet.create({});

export default App;
