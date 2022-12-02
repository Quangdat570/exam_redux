import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCount } from "../../store/feautes/counter/Counter.slice";
import { Link } from "react-router-dom";





 export const Cart = ({game}) => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
   
    
    return (
        <div className="cart col-3 text-center mt-5">
            <div className="todo-id">{ game.id}</div>
            <div className="title-name"> { game.title}</div>
            <Link as={Link} to={`/games/` + game.id} ><img src={game.thumbnail} alt="" /></Link>
            <div>{game.platform}</div>
            <div>{game.publisher}</div>
            <div>{game.developer}</div>
            {/* <button onClick={() => dispatch(decrement())}>-</button>
                <span>{ count }</span>
            <button onClick={() => dispatch(increment())}>+</button> */}
            
        </div>
    );
};