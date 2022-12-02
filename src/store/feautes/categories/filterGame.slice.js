import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    
    filter: [],
    
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        productsLoaded: (state, action) => {
            return {
                ...state,
                data: action.payload,
            };
        },
       
       
        filterChanged: (state, action) => {
            return {
                ...state,
                
                filter: action.payload,
            };
        },
    },
});

export const productsReducer = productsSlice.reducer;

export const { productsLoaded, filterChanged } = productsSlice.actions;

export const selectAllProducts = (state) => state.products;

export const selectProductById = (productId) => (state) =>
    state.products.data.find((product) => product.id == productId);

// export const selectProductsList = (state) => {
//         const filteredProducts = state.products.data.filter((product) => {
//             if (state.products.filter.length === 0) return true;
//             else return state.products.filter.includes(product.category);
//         });
    
        
        
    
       
    
//         return {
//             categories: state.categories,
//             products: productsByPage,
            
//             filterChanged,
//         };
//     };