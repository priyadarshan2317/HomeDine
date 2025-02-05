import { createSlice } from "@reduxjs/toolkit";

const storedItems = localStorage.getItem('cartItems');
const initialState = {
    cartItems: storedItems ? JSON.parse(storedItems) : []
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.cartItems.find(items => items.id === newItem.id);

            if (existingItem) {
                existingItem.quantity += newItem.quantity;
            } else {
                state.cartItems.push({
                    id: newItem.id,
                    title: newItem.title,
                    img: newItem.img,
                    quantity: newItem.quantity
                });
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        deleteFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(items => items.id !== action.payload.id);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const itemToUpdate = state.cartItems.find(item => item.id === id);
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity;
                localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
            }
        },
    }
});

export default cartSlice.reducer;
export const { addToCart, deleteFromCart, updateQuantity } = cartSlice.actions;
