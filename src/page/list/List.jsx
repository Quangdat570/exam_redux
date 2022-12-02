import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { Cart } from "../commentCart/Cart";
import { useState } from "react";



import {selectGames } from "../../store/feautes/comments.slice";

import { Category } from "../commentCart/Category";







export const List = ( ) => {
    const dispatch = useDispatch();
    const [filters, setFilters] = useState([])
    

    const { data: games } = useSelector(selectGames);
    const handleFiltersChange = (newFilters) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            ...newFilters,
        })
            
        )
    }
    

    const list = games.map((game) => <Cart key={game.id} game={game}/> )

    // const cate = games.map((game) => <Cate key={game.id} game={game}/>)
    return (
        <div className="">
           <Category filters={filters} onChange={handleFiltersChange}/>
            <div className="User-list  d-flex flex-wrap mt-5">{list}</div>
        </div>

    )
};