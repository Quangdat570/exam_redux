import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo,selectTodos } from "../../store/feautes/comments.slice";
import "bootstrap/dist/css/bootstrap.min.css";
const Comnent = () => {
    const dispatch = useDispatch();
    const { data: todos } = useSelector(selectTodos);

    return (
        <div className="d-flex">
            <div className="d-flex ">
                <div>
                    {todos.map((todo) => (
                        <div key={todo.id}>{todo.name}</div>
                    ))}
                </div>
                <div>
                {todos.map((todo) => (
                        <div key={todo.id}>{todo.body}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Comnent;
