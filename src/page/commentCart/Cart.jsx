import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, selectCount } from "../../store/feautes/counter/Counter.slice";





 export const Cart = ({todo}) => {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
   
    
    return (
        <div className="cart col-3 text-center mt-5">
            <div className="todo-id">{ todo.id}</div>
            <div className="title-name"> { todo.name}</div>
            <div className="title-email"> { todo.email}</div>
            <div className="title-body"> { todo.body } </div>
            <button onClick={() => dispatch(decrement())}>-</button>
                <span>{ count }</span>
            <button onClick={() => dispatch(increment())}>+</button>
            
        </div>
    );
};