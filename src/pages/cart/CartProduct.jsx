import React from "react";

const CartProduct = ({ item }) => {
    return (
        <div className={'flex justify-between py-4'}>
            <div className={'flex items-center'}>
                <img src={item.meal.image} className={'w-[40px] mr-4'} />
                <p>{item.meal.name}</p>
            </div>
            <div className={'flex justify-between w-1/3 pl-3 xs:w-1/2'}>
                <p>(x{item.amount})</p>
                <b>{item.price} ₼</b>
            </div>
        </div>
    )
}

export default CartProduct;