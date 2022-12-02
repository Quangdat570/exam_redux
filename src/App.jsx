import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import { useDispatch, useSelector } from "react-redux";



import { loadGames} from "./store/feautes/comments.slice"

function App() {
    const dispatch = useDispatch();
    

    useEffect(() => {
        
        dispatch(loadGames());
    }, []);

    return (
        <div className="app">
           
            <Outlet />

            <Footer />

            
        </div>
    );
}

export default App;
