import React, {useState} from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import './index.css';
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./pages/home/Home";

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
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;