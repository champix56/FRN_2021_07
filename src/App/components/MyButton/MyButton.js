import React from 'react';
import {Button, StyleSheet, Text, TouchableHighlight, View} from 'react-native';

function MyButton(props) {
  console.log(props);
  return (
    <TouchableHighlight
      onPress={e => {
        console.log(e);
      }}
      style={{
        backgroundColor: props.color,
        padding: 10,
      }}>
      <View>
        <Text style={{textAlign: 'center', fontSize:17, color: 'white', fontWeight:'bold'}}>{props.text}</Text>
      </View>
    </TouchableHighlight>
  );
}
export default MyButton;
