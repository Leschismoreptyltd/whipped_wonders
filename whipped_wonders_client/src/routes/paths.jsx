import React from "react";
import pathConstants from "./pathConstants.js";

const Home = React.lazy(() => import ("../components/main/Home.jsx"))

const routes = [
    {path: pathConstants.HOME, element: <Home/>},
]

export default routes