import React, {useState} from "react";
import PageNav from "./PageNav";
import CartProduct from "./CartProduct";
import {NavLink} from "react-router-dom";
import SheetIcon from "../../assets/icons/cart/sheet.svg";
import SeeAlso from "./SeeAlso";

const Payment = () => {
    const [products] = useState([
        {
            // picture: Sezar,
            name: 'Salad',
            portion: 1,
            price: 15.00
        },
        {
            // picture: Monastr,
            name: 'Waffle',
            portion: 1,
            price: 20.00
        }
    ]);

    const sum = products.reduce((total, currentValue) => total = total + currentValue.price, 0);

    return (
        <div className={'mt-12 mb-2'}>
            <PageNav prev={'Addresses'} next={'Confirm'}/>
            <div className={'pt-20 pb-10 px-48 lg2:px-10'}>
                <div className={'flex items-start lg:flex-col-reverse'}>
                    <div className={'grow p-4 mr-5 border-2 rounded-lg lg:w-full'}>
                        <h5 className={'font-medium'}>Ödəmə üsulu</h5>
                        <hr className={'my-3'} />
                        <form>
                            <div className={'mb-3'}>
                                <input type={'radio'} id={'by-card'} className={'mr-2 accent-red'} name={'payment-method'} />
                                <label htmlFor={'by-card'}>Kartla</label>
                            </div>
                            <div>
                                <input type={'radio'} id={'by-cash'} className={'mr-2 accent-red'} name={'payment-method'} />
                                <label htmlFor={'by-cash'}>Nağd pulla</label>
                            </div>
                        </form>
                    </div>
                    <div className={'p-4 border-2 rounded-lg w-2/3 lg:w-full lg:mb-4'}>
                        <div className={'flex mb-3'}>
                            <img src={SheetIcon} className={'mr-4'}/>
                            <h5 className={'font-medium'}>Səbətim</h5>
                        </div>
                        <div className={'flex justify-between mb-3'}>
                            <p>Product name</p>
                            <div className={'flex justify-between w-1/3 xs:w-1/2'}>
                                <p>Portion</p>
                                <p className={'pr-3'}>Price</p>
                            </div>
                        </div>
                        <hr/>
                        <div>
                            {products.map((product, i) => {
                                return (
                                    <CartProduct data={product} key={i}/>
                                )
                            })}
                        </div>
                        <hr className={'mt-2 mb-3'}/>
                        <h4 className={'text-xl text-[#8F161A] text-end'}>Ümumi məbləğ: <b>{sum.toFixed(2)}</b> ₼</h4>
                    </div>
                </div>
                <div className={'mt-6 flex flex-col items-end'}>
                    <div className={'mb-6 w-1/3 lg:w-full'}>
                        <NavLink to={'/cart'}>
                            <button
                                className={'text-red text-lg font-medium rounded-full border-2 border-red w-full py-4'}>Review
                                your order
                            </button>
                        </NavLink>
                    </div>
                    <div className={'w-1/3 lg:w-full'}>
                        <NavLink to={'/cart/confirm'}>
                            <button
                                className={'text-white text-lg font-medium rounded-full bg-red w-full py-4'}>Complete
                                your order
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className={'px-16 mb-10'}>
                <h3 className={'text-[32px] text-red font-bold'}>Həmçinin bax</h3>
            </div>
            <SeeAlso/>
        </div>
    )
}

export default Payment;