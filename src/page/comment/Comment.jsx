import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo,selectTodos } from "../../store/feautes/comments.slice";
import "bootstrap/dist/css/bootstrap.min.css";
// import Cart from "../commentCart/Cart";
import { List } from "../list/List";

const Comnent = () => {
    const dispatch = useDispatch();
    const { data: todos } = useSelector(selectTodos);

    return (
        <div className="d-flex">
            
            <List/>


        </div>
    );
};

export default Comnent;
