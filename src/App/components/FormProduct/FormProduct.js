import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import store, {productsInitialState} from '../../store/store';
import PropTypes from 'prop-types';

const FormProduct = props => {
  const [product, setproduct] = useState(productsInitialState.current);
  useEffect(() => {
    console.log(product);
  }, [product]);
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{textAlign: 'center', fontSize: 17}}>Product Editor</Text>
      <Text>Nom</Text>
      <TextInput style={styles.inputs} />
      <Text>img url</Text>
      <TextInput style={styles.inputs} />
      <Text>Prix</Text>
      <TextInput style={styles.inputs} />
      <Text>Description</Text>
      <TextInput
        multiline={true}
        style={{...styles.inputs, ...styles.inputMultilignes}}
      />
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
  },
});
FormProduct.propTypes = {
  id: PropTypes.number,
};
export default FormProduct;
