import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        list: []
    },
    reducers: {
        addItem: (state, { payload }) => {
            const existingItem = state.list.find(item => item.id === payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.list.push({ ...payload, quantity: 1 });
            }
        },
        removeItem: (state, { payload }) => {
            state.list = state.list.filter(item => item.id !== payload.id);
        },
        decreaseItem: (state, { payload }) => {
            const existingItem = state.list.find(item => item.id === payload.id);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            }
        }
    }
});

// Export the actions
export const { addItem, removeItem, decreaseItem } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;
