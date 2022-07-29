import React, {useState} from 'react';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import './index.css';
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/Menu";
import Campaigns from "./pages/campaigns/Campaigns";
import Contact from "./pages/contact/Contact";
import Career from "./pages/career/Career";
import About from "./pages/about/About";
import News from "./pages/news/News";
import LayOut from "./components/layouts/LayOut";
import Signup from "./pages/signup/Signup";

const App = () => {
    return (
        <BrowserRouter>
            <LayOut>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/menu' element={<Menu/>}/>
                    <Route path='/campaigns' element={<Campaigns/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='/career' element={<Career/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                </Routes>
            </LayOut>
        </BrowserRouter>
    );
};

export default App;