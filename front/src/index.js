import React from 'react'
import ReactDOM from 'react-dom'
import './assets/global.scss'
import HomeMap from "./pages/HomeMap/HomeMap"
import AddOffer from "./pages/AddOffer/AddOffer";
import {BrowserRouter, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Paths from "./Paths";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={Paths.homeMap} element={<HomeMap/>}/>
                <Route path={Paths.addOffer} element={<AddOffer/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
