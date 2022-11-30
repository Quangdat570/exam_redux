import { configureStore } from "@reduxjs/toolkit";

import { todoReducer } from "./feautes/comments.slice";
import { counterReducer } from "./feautes/counter/Counter.slice";


const store = configureStore({
    reducer: {
       
        todos: todoReducer,
        counter: counterReducer,
        
    },
});

export default store;