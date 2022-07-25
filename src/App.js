import React, {useState} from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import './index.css';
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";

const App = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
            <Footer theme={'default'}/>
            {/* TODO fix footer's changing */}
        </BrowserRouter>
    );
};

export default App;