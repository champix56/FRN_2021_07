import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './TemplateName.style';
class TemplateName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.TemplateName} testID="TemplateName">
        <Text>templateName</Text>
      </View>
    );
  }
}

export default TemplateName;
