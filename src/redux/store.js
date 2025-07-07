import { configureStore } from '@reduxjs/toolkit';
import destinations from './destinationsSlice';
import cart from './cartSlice';


export const store = configureStore({
    reducer: {
        destinations,
        cart
        
    }
})