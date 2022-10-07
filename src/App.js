import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
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
import Orders from './components/ui/meal/Orders';
import Profile from './components/ui/Profile';
import InlineNews from './pages/news/InlineNews';
import AddressesPage from './components/ui/meal/AddressesPage';
import './index.css';

const App = () => {
    // IMPORTANT: this part defines if the entered user is authorized or not.
    // We can't call here us Auth from GlobalContext since user is not 
    const _isAuth = localStorage.getItem('isAuth');
    const isAuth = _isAuth ? _isAuth === 'true' : false;

    return (
        <BrowserRouter>
            <LayOut>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/campaigns' element={<Campaigns />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/career' element={<Career />} />
                    <Route path='/signup' element={<Signup />} />
                    {isAuth && // TODO: add private and public routing in routes folder (DISCUSS IT)
                        <Route path='/cart' element={<Cart />}>
                            <Route index element={<Index />} />
                            <Route path='addresses' element={<Addresses />} />
                            <Route path='payment' element={<Payment />} />
                            <Route path='confirm' element={<Confirm />} />
                        </Route>
                    }
                    {isAuth &&
                        <Route path='/profile'> {/* TODO: check it */}
                            <Route index element={<Profile />} />
                            <Route path='orders' element={<Orders />} />
                            <Route path='addresses' element={<AddressesPage />} />
                        </Route>
                    }
                    <Route path='/inline-news/:id' element={<InlineNews />} />
                    <Route path='*' element={<Navigate to="/" />} /> {/* NOTE: error page */}
                </Routes>
            </LayOut>
        </BrowserRouter>
    );
};

export default App;