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
import Cart from "./pages/cart/Cart";
import Index from "./pages/cart/Index";
import Addresses from "./pages/cart/Addresses";
import Payment from "./pages/cart/Payment";
import Confirm from "./pages/cart/Confirm";
import LayOut from "./components/layouts/LayOut";
import Signup from "./pages/signup/Signup";

const App = () => {
    return (
        <BrowserRouter>
            {/*<Header />*/}
            {/*<Routes>*/}
            {/*    <Route path='/' element={<Home/>}/>*/}
            {/*    <Route path='/about' element={<About/>}/>*/}
            {/*    <Route path='/menu' element={<Menu/>}/>*/}
            {/*    <Route path='/campaigns' element={<Campaigns/>}/>*/}
            {/*    <Route path='/news' element={<News/>}/>*/}
            {/*    <Route path='/contact' element={<Contact/>}/>*/}
            {/*    <Route path='/career' element={<Career/>}/>*/}
            {/*    <Route path='/cart' element={<Cart/>}>*/}
            {/*        <Route index element={<Index/>}/>*/}
            {/*        <Route path='addresses' element={<Addresses/>}/>*/}
            {/*        <Route path='payment' element={<Payment/>}/>*/}
            {/*        <Route path='confirm' element={<Confirm/>}/>*/}
            {/*    </Route>*/}
            {/*</Routes>*/}
            {/*<Footer theme={'default'}/>*/}
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
                    <Route path='/cart' element={<Cart/>}>
                        <Route index element={<Index/>}/>
                        <Route path='addresses' element={<Addresses/>}/>
                        <Route path='payment' element={<Payment/>}/>
                        <Route path='confirm' element={<Confirm/>}/>
                    </Route>
                </Routes>
            </LayOut>
        </BrowserRouter>
    );
};

export default App;