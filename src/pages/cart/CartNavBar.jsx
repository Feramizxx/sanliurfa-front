import React from "react";
import CartNavItem from "./CartNavItem";

const CartNavBar = () => {
    return (
        <div className={'flex justify-center'}>
            <CartNavItem name={''} first={true} />
            <CartNavItem name={'Addresses'} first={false} />
            <CartNavItem name={'Payment'} first={false} />
            <CartNavItem name={'Confirm'} first={false} />
        </div>
    )
}

export default CartNavBar;