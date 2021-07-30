import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import store, {productsInitialState} from '../../store/store';
import PropTypes from 'prop-types';
import * as RNE from 'react-native-elements';

const FormProduct = props => {
  const [product, setproduct] = useState(productsInitialState.current);
  useEffect(() => {
    console.log(product);
  }, [product]);
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 17}}>Product Editor</Text>
      <Text>Nom</Text>
      <TextInput
        value={product.name}
        style={styles.inputs}
        onChangeText={textval => {
          setproduct({...product, name: textval});
        }}
      />
      <Text>img url</Text>
      <TextInput
        value={product.img}
        style={styles.inputs}
        onChangeText={textval => {
          setproduct({...product, img: textval});
        }}
      />
      <Text>Prix</Text>
      <TextInput
        value={String(product.prix)}
        style={styles.inputs}
        onChangeText={textval => {
          if (isNaN(Number(textval))) {
            return;
          }
          setproduct({...product, prix: Number(textval)});
        }}
      />
      <Text>Description</Text>
      <TextInput
        multiline={true}
        style={{...styles.inputs, ...styles.inputMultilignes}}
        value={product.description}
        onChangeText={textval => {
          setproduct({...product, description: textval});
        }}
      />
      <RNE.Button onPress={e => {}} title={'save'} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputs: {
    borderWidth: 1,
    textAlign: 'left',
    width: '100%',
  },
  inputMultilignes: {
    height: 300,
    textAlignVertical: 'top',
  },
});
FormProduct.propTypes = {
  id: PropTypes.number,
};
export default FormProduct;
