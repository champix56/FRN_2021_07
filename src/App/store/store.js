import {createStore} from 'redux';
const navInitialState = {};
const productsInitialState = {
  products: [],
  current: {
    title: '',
    price: 0,
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
    default:
      return state;
  }
}
const store = createStore(productsReducer);
export default store;
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: 'ADD_PRODUCT',
  value: {
    title: 'Kouign aman',
    price: 3.5,
    img: 'https://blog.morbihan.com/wp-content/uploads/kouign_amann-recette-morbihan-BERTHIER_Emmanuel-480x270.jpg',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
});

/*
export let state=productsReducer(undefined,{type:'ADD_PRODUCT', value:{title: 'Kouign aman',price: 3.50,img: 'https://blog.morbihan.com/wp-content/uploads/kouign_amann-recette-morbihan-BERTHIER_Emmanuel-480x270.jpg',description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',}});

console.log(state);

state=productsReducer(state,{type:'ADD_PRODUCT', value:{title: 'granite triskel',price: 33.80,img: 'https://www.jardinoa.fr/858-thickbox_default/ecusson-triskell.jpg',description: 'Menhir taillé par obélix lui meme',}});

console.log(state);
*/
