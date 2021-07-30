import {createStore, combineReducers} from 'redux';
import MainScreen from '../components/MainScreen/MainScreen';
export const navInitialState = {screen: null};
export const productsInitialState = {
  products: [],
  current: {
    name: 'titre',
    prix: 10,
    img: 'http://',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
};
function productsReducer(state = productsInitialState, action) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {...state, products: [...state.products, action.value]};
    case 'ADD_PRODUCTS':
      return {...state, products: action.values};
    case 'SET_CURRENT':
      return {...state, current: action.value};
    case 'SAVE_CURRENT':
      fetch(
        `http://desorbaix.alexandre.free.fr/phpRest/products${
          state.current.id ? '/' + state.current.id : ''
        }`,
        {
          method: state.current.id ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.parse(state.current),
        },
      )
        .then(f => {
          // console.log(f);
          return f.json();
        })
        .then(o => {
          if (undefined !== state.current.id) {
            store.dispatch({type: 'LOCAL_SAVE_NEW', value: o});
          } else {
            store.dispatch({type: 'LOCAL_UPDATE', value: o});
          }
          store.dispatch({
            type: 'SET_CURRENT',
            value: productsInitialState.current,
          });
        });
      return state;
    case 'LOCAL_SAVE_NEW':
      return {
        ...state,
        products: [...state.products, action.value],
      };
    case 'LOCAL_UPDATE':
      const i = state.products.findIndex(e => e.id === action.value.id);
      return {
        ...state,
        products: [
          ...state.products.slice(0, i),
          action.value,
          ...state.products.slice(i + 1),
        ],
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
