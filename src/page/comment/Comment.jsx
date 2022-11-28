import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo,selectTodos } from "../../store/feautes/comments.slice";

const Comnent = () => {
    const dispatch = useDispatch();
    const { data: todos } = useSelector(selectTodos);

    return (
        <div>
            TodoList
            
            <div>
                {todos.map((todo) => (
                    <div key={todo.id}>{todo.name}</div>
                ))}
            </div>
        </div>
    );
};

export default Comnent;
