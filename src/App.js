import React, {useState} from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import './index.css';
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import Campaigns from "./pages/campaigns/Campaigns";

const App = () => {
    const [] = useState();

    return (
        <BrowserRouter>
            <Header currentLink={1} />
            <Routes>
                <Route path='/' element={
                    <>
                        <Home />
                    </>
                }/>
                <Route path='/menu' element={
                    <>
                        <Menu />
                    </>
                }/>
                <Route path='/campaigns' element={
                    <>
                        <Campaigns />
                    </>
                }/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;