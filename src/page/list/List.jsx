import { useDispatch, useSelector } from "react-redux";

import { createTodo,selectTodos } from "../../store/feautes/comments.slice";
import { Cart } from "../commentCart/Cart";


export const List = ( ) => {
    const dispatch = useDispatch();
    const { data: todos } = useSelector(selectTodos);

    const list = todos.map((todo) => <Cart key={todo.id} todo={todo}/> )
    return <div className="User-list d-flex flex-wrap mt-5">{list}</div>
};