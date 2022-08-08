import React from "react";
import CartNavItem from "./CartNavItem";

const CartNavBar = () => {
    return (
        <div className={'flex justify-center'}>
            <CartNavItem name={''} first={true} order={0} />
            <CartNavItem name={'Addresses'} first={false} order={1} />
            <CartNavItem name={'Payment'} first={false} order={2} />
            <CartNavItem name={'Confirm'} first={false} order={3} />
        </div>
    )
}

export default CartNavBar;