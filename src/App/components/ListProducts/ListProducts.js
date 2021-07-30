import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Image} from 'react-native';
import store from '../../store/store';
import SquareButton from '../SquareButton/SquareButton';
import styles from './ListProducts.style';
const ListProducts = props => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    setproducts(store.getState().stock.products);
    store.subscribe(() => {
      setproducts(store.getState().stock.products);
    });
  }, [1]);
  return (
    <View style={styles.ListProducts} testID="ListProducts">
      <TextInput placeholder="Recherche" />
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {products.map((e, i) => {
          return (
            <SquareButton onPress={() => {}} text={e.name} key={'product-' + i}>
              <Image source={{uri: e.img}} style={{width: 100, height: 100}} />
            </SquareButton>
          );
        })}
      </View>
    </View>
  );
};

export default ListProducts;
