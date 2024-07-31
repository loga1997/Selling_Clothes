


import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/reducer/cart';
import productsReducer from '../redux/reducer/productlist';
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer
    },
});

export default store;



