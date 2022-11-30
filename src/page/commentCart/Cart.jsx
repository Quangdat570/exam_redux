import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCounter } from "../../store/feautes/counter/counter.slice";
import { incQty, decQty } from "../../store/feautes/counter/counter.slice";

 export const Cart = ({todo}) => {
    const {incQty, decQty} = useSelector(selectCounter);
    const dispatch = useDispatch();
    
    return (
        <div className="cart col-3 text-center mt-5">
            <div className="todo-id">{ todo.id}</div>
            <div className="title-name"> { todo.name}</div>
            <div className="title-email"> { todo.email}</div>
            <div className="title-body"> { todo.body } </div>
            <div className="counter">
                <button onClick={() => dispatch(decQty(todo.id))}>-</button>
                {todo.quantity}
                <button  onClick={() => dispatch(incQty(todo.id))}>+</button>
            </div>
            
        </div>
    );
};