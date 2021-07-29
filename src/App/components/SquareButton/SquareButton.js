import React from 'react';
import PropTypes from 'prop-types';
import {Text, TouchableHighlight} from 'react-native';
import styles from './SquareButton.style';
const SquareButton = props => {
  console.log(props);
  return (
    <TouchableHighlight
      onPress={props.onPress}
      style={styles.SquareButton}
      testID="SquareButton">
      <>
        <Text>{props.text}</Text>
        {props.children}
      </>
    </TouchableHighlight>
  );
};

SquareButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.element,
};

export default SquareButton;
