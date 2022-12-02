import { configureStore } from "@reduxjs/toolkit";

import { gameReducer } from "./feautes/comments.slice";
import { counterReducer } from "./feautes/counter/Counter.slice";
import { infoReducer } from "../page/GameInfo/Gameinfo.slice";
import { gameDetailReducer } from "../page/GameInfo/Gameinfo.slice";
import { categoriesDetailReducer } from "./feautes/categories/categories.slice";



const store = configureStore({
    reducer: {
       
        games: gameReducer,
        counter: counterReducer,
        infos: infoReducer,
        game: gameDetailReducer,
        category: categoriesDetailReducer,
       
        
    },
});

export default store;