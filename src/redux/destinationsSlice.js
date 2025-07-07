import { createSlice } from '@reduxjs/toolkit';

export const destinationsSlice = createSlice({
    name: 'destinations',
    initialState: {
        selectedCategory: "Spring"
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})

export const getSelectedCategory = state =>state.destinations.selectedCategory;
export const { filterCategory} = destinationsSlice.actions;
export default destinationsSlice.reducer;