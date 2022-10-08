
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import { roundPrice } from './../helpers/index';
import { getCart } from './../api/getCart';
import PageLoader from './../components/PageLoader';
import { createCart } from '../api/createCart';
import { updateCart } from './../api/updateCart';
import { deleteCart } from '../api/deleteCart';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartToken, setCartToken] = useState(localStorage.getItem('cart_token'));
    const [isCartLoading, setIsCartLoading] = useState(true);
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [items, setItems] = useState([]);
    const [addressId, setAddressId] = useState(null);

    const saveCart = async (data) => {
        let token = cartToken;
        try {
            if (!cartToken) {
                const data = await createCart();
                token = data;
                setCartToken(data);
                localStorage.setItem('cart_token', data);
            }

            await updateCart(token, { ...data, addressId });
        } catch (error) {
            alert(error);
        }
    }

    const removeCart = async () => {
        if (cartToken) {
            try {
                await deleteCart(cartToken);
                setCartToken('');
                localStorage.setItem('cart_token', '');
            } catch (error) {
                alert(error);
            }
        }
    }

    const fetchCart = async () => {
        if (cartToken) {
            try {
                const cart = await getCart(cartToken);
                const { items, totalAmount, totalPrice, addressId } = cart;
                setItems(items);
                setTotalAmount(totalAmount);
                setTotalPrice(totalPrice)
            } catch (error) {
                alert(error);
            }
        }
        setIsCartLoading(false);
    }

    const addProduct = async (meal, amount, price) => {
        const newItems = [
            ...items,
            { meal, amount, price }
        ]
        const newAmount = totalAmount + amount;
        const newPrice = roundPrice(totalPrice + price);

        setItems(newItems);
        setTotalAmount(newAmount);
        setTotalPrice(newPrice);
        await saveCart({ items: newItems, totalAmount: newAmount, totalPrice: newPrice });
    }

    const incrementProduct = async (name) => {
        const index = items.findIndex((item) => item.meal.name === name);
        const item = items[index];
        const price = item.price / item.amount;
        items[index] = {
            ...item,
            price: roundPrice(item.price + price),
            amount: item.amount + 1
        }
        const newAmount = totalAmount + 1;
        const newPrice = roundPrice(totalPrice + price)

        setTotalAmount(newAmount);
        setTotalPrice(newPrice);
        await saveCart({ items, totalPrice: newPrice, totalAmount: newAmount });
    }

    const decrementProduct = async (name) => {
        const index = items.findIndex((item) => item.meal.name === name);
        const item = items[index];
        const price = item.price / item.amount;
        items[index] = {
            ...item,
            price: roundPrice(item.price - price),
            amount: item.amount - 1
        }
        const newAmount = totalAmount - 1;
        const newPrice = roundPrice(totalPrice - price);
        setTotalAmount(newAmount);
        setTotalPrice(newPrice);
        await saveCart({ items, totalPrice: newPrice, totalAmount: newAmount })
    }

    const removeProduct = async (name) => {
        const item = items.find((item) => item.meal.name === name);
        const amount = item.amount;
        const price = item.price;

        const newItems = items.filter((item) => item.meal.name !== name);
        const newAmount = totalAmount - amount;
        const newPrice = roundPrice(totalPrice - price);

        setItems(newItems);
        setTotalAmount(newAmount);
        setTotalPrice(newPrice);
        await saveCart({ items: newItems, totalPrice: newPrice, totalAmount: newAmount });
    }

    const selectAddress = (address) => {
        setAddressId(address.id);
    }

    useEffect(() => {
        fetchCart();
    }, [cartToken]);

    if (isCartLoading) return <PageLoader />

    return (
        <CartContext.Provider value={{
            totalAmount,
            totalPrice,
            items,
            addProduct,
            incrementProduct,
            removeProduct,
            decrementProduct,
            addressId,
            selectAddress
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;