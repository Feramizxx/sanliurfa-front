import { useContext } from 'react';
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
import ResetPassword from './pages/reset-password/ResetPassword';
import { AuthContext } from './contexts/AuthContext';
import ForgotPassword from './pages/forgot-password/ForgotPassword';
import SearchedMenu from './pages/searched-menu/SearchedMenu';
import SingleOrder from './pages/single-order/SingleOrder';
import PaymentFailed from './pages/payment-failed/PaymentFailed';
import './index.css';

const App = () => {
    return (
        <BrowserRouter>
            <LayOut>
                <Router />
            </LayOut>
        </BrowserRouter>
    );
};

const Router = () => {
    const { isAuth } = useContext(AuthContext)

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/campaigns' element={<Campaigns />} />
            <Route path='/news' element={<News />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/career' element={<Career />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/reset-password/:token' element={<ResetPassword />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/cart' element={<Cart />}>
                <Route index element={<Index />} />
                {isAuth &&
                    <>
                        <Route path='addresses' element={<Addresses />} />
                        <Route path='payment' element={<Payment />} />
                        <Route path='confirm/:paymentToken' element={<Confirm />} />
                    </>
                }
            </Route>
            {isAuth &&
                <Route path='/profile'>
                    <Route index element={<Profile />} />
                    <Route path='orders' element={<Orders />} />
                    <Route path='orders/:id' element={<SingleOrder />} />
                    <Route path='addresses' element={<AddressesPage />} />
                </Route>
            }
            <Route path='/inline-news/:id' element={<InlineNews />} />
            <Route path='/searched-meals' element={<SearchedMenu />} />
            <Route path='/payment-failed/:paymentToken' element={<PaymentFailed />} />
            <Route path='*' element={<Navigate to="/" />} /> {/* NOTE: error page */}

        </Routes>
    )
}

export default App;