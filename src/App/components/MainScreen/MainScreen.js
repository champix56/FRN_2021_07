import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';
import {IMG_CART, IMG_FORM, IMG_LOGO} from '../../ressources/images';
import {displayName as name} from '../../../../app.json';
import styles from './MainScreen.style';
import SquareButton from '../SquareButton/SquareButton';
import FormProduct from '../FormProduct/FormProduct';
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
        <View style={styles.buttonContainer}>
          <SquareButton
            text="Nouveau"
            onPress={e => {
              this.props.onScreenSelection(<FormProduct />);
            }}>
            <Image source={{uri: IMG_FORM}} style={styles.button} />
          </SquareButton>
          <SquareButton
            text="n2"
            onPress={e => {
              console.log(e);
            }}>
            <Image source={{uri: IMG_CART}} style={styles.button} />
          </SquareButton>
        </View>
      </View>
    );
  }
}
MainScreen.propTypes = {
  onScreenSelection: PropTypes.func.isRequired,
};
export default MainScreen;
