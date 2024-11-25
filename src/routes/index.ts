import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: React.createElement(App),
        children: [
            {
                path: "",
                element: React.createElement(Home)
            },
            {
                path: "/login",
                element: React.createElement(LoginPage)
            },
            {
                path: "/about",
                element: React.createElement(About)
            }
        ]
    }
]);

export default router;