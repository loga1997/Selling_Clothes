


import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/reducer/cart';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

export default store;
