import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import { useDispatch, useSelector } from "react-redux";



import {createTodo, loadTodos} from "./store/feautes/comments.slice"

function App() {
    const dispatch = useDispatch();
    

    useEffect(() => {
        
        dispatch(loadTodos());
    }, []);

    return (
        <div className="app">
           
            <Outlet />

            <Footer />

            
        </div>
    );
}

export default App;
