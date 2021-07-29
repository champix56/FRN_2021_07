import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {IMG_FORM, IMG_LOGO} from '../../ressources/images';
import {displayName as name} from '../../../../app.json';
import styles from './MainScreen.style';
import SquareButton from '../SquareButton/SquareButton';
import MyButton from '../MyButton/MyButton';
class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <View>
          <Text style={styles.appName}>{name}</Text>
        </View>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={{uri: IMG_LOGO}} />
        </View>
        <SquareButton
          text="Nouveau"
          onPress={e => {
            console.log(e);
          }}>
          <Image source={{uri: IMG_FORM}} style={styles.button} />
        </SquareButton>
        <SquareButton
          text="n2"
          onPress={e => {
            console.log(e);
          }}
        />
        <MyButton text="dscs" />
      </View>
    );
  }
}

export default MainScreen;
