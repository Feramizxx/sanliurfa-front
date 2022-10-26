import React from "react";
import { useContext } from "react";
import CartNavItem from "./CartNavItem";
import { LanguageContext } from '../../contexts/LanguageContext';

const CartNavBar = () => {
    const { content } = useContext(LanguageContext);
    return (
        <div className={'flex justify-center'}>
            <CartNavItem name={content.pages.cart.nav.cart} first={true} order={0} />
            <CartNavItem name={content.pages.cart.nav.addresses} first={false} order={1} />
            <CartNavItem name={content.pages.cart.nav.payment} first={false} order={2} />
            <CartNavItem name={content.pages.cart.nav.confirm} first={false} order={3} />
        </div>
    )
}

export default CartNavBar;