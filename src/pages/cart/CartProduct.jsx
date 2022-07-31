import React from "react";

const CartProduct = (props) => {
    return (
        <div className={'flex justify-between py-4'}>
            <div className={'flex items-center'}>
                <img src={props.data.picture} className={'w-[40px] mr-4'} />
                <p>{props.data.name}</p>
            </div>
            <div className={'flex justify-between w-1/3 pl-3'}>
                <p>(x{props.data.portion})</p>
                <b>{props.data.price.toFixed(2)} ₼</b>
            </div>
        </div>
    )
}

export default CartProduct;