import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styles from './TemplateName.style';
const TemplateName = props => {
  return (
    <View style={styles.TemplateName} testID="TemplateName">
      <Text>templateName</Text>
    </View>
  );
};

export default TemplateName;
