import React from "react";
import {Outlet} from "react-router-dom";
import CartNavBar from "./CartNavBar";
import PageNav from "./PageNav";

const Cart = () => {
    return (
        <div className={'pt-40'}>
            <div className={'h-[80px] bg-[#d9a5a6] fixed top-[40px] left-0 w-full'}></div>
            <CartNavBar />
            <Outlet />
        </div>
    )
}

export default Cart;