import {createSlice, configureStore } from '@reduxjs/toolkit';

const initialCartState = {
    isMyCart : false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        toggleCart(state){
            state.isMyCart = !state.isMyCart;
        }
    }
})


const store = configureStore({
    reducer:{
        cart: cartSlice.reducer
    }
})


export const cartActions = cartSlice.actions;

export default store;