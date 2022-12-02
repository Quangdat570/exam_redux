// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import store from "./store";
import App from "./App";

import Comnent from "./page/comment/Comment";
import Info from "./page/GameInfo/GameInfo";

const routes = createRoutesFromElements(
    <Route element={<App />}>
        <Route index element={<Comnent />} />
        <Route path="/games/:id" element={<Info/>}/>
        
        <Route path="*" element={<div>404 | Page Not Found</div>} />
    </Route>
);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
