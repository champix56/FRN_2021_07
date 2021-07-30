import {createStore, combineReducers} from 'redux';
import MainScreen from '../components/MainScreen/MainScreen';
export const navInitialState = {screen: null};
export const productsInitialState = {
  products: [],
  current: {
    name: '',
    prix: 0,
    img: '',
    description: '',
  },
};
function productsReducer(state = productsInitialState, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {...state, products: [...state.products, action.value]};
    case 'ADD_PRODUCTS':
      return {...state, products: action.values};
    case 'SAVE_NEW_CURRENT':
      return {
        ...state,
        products: [...state.products, state.current],
        current: productsInitialState.current,
      };
    case 'INIT_PRODUCT_LIST':
      fetch('http://desorbaix.alexandre.free.fr/phpRest/products/')
        .then(fjson => fjson.json())
        .then(arr => {
          console.warn(arr);
          store.dispatch({type: 'ADD_PRODUCTS', values: arr});
        });
      return state;
    default:
      return state;
  }
}
const navReducer = (state = navInitialState, action) => {
  switch (action.type) {
    case 'SET_SCREEN':
      return {...state, screen: action.value};
    case 'GO_HOME':
      return {...state, screen: <MainScreen />};
    default:
      return state;
  }
};
const store = createStore(
  combineReducers({
    stock: productsReducer,
    navigation: navReducer,
  }),
);
export default store;
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({type: 'INIT_PRODUCT_LIST'});

/*
export let state=productsReducer(undefined,{type:'ADD_PRODUCT', value:{title: 'Kouign aman',price: 3.50,img: 'https://blog.morbihan.com/wp-content/uploads/kouign_amann-recette-morbihan-BERTHIER_Emmanuel-480x270.jpg',description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',}});

console.log(state);

state=productsReducer(state,{type:'ADD_PRODUCT', value:{title: 'granite triskel',price: 33.80,img: 'https://www.jardinoa.fr/858-thickbox_default/ecusson-triskell.jpg',description: 'Menhir taillé par obélix lui meme',}});

console.log(state);
*/
