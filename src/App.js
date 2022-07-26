import React, {useState} from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import './index.css';
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";

const App = () => {
    const [] = useState();

    return (
        <BrowserRouter>
            <Header currentLink={3} />
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
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;