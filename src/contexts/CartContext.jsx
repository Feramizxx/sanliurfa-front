import { createContext, useEffect } from 'react';
import { useState } from 'react';
import { roundPrice } from './../helpers/index';
import { getCart } from './../api/getCart';
import PageLoader from './../components/PageLoader';
import { createCart } from '../api/createCart';
import { updateCart } from './../api/updateCart';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartToken, setCartToken] = useState(localStorage.getItem('cart_token'));
    const [isCartLoading, setIsCartLoading] = useState(true);
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [items, setItems] = useState([]);
    const [addressId, setAddressId] = useState(null);

    const reset = () => {
        setItems([]);
        setAddressId(null);
        setTotalAmount(0);
        setTotalPrice(0);
    }

    const initCart = async (cartToken) => {
        let token = cartToken;
        if (!cartToken || cartToken === '') {
            const data = await createCart();
            token = data;
            setCartToken(data);
            localStorage.setItem('cart_token', data);
        }
        return token;
    }

    const saveCart = async (data) => {
        try {
            const token = await initCart(cartToken);
            const address = data.addressId !== undefined ? data.addressId : addressId;

            await updateCart(token, { ...data, addressId: address });
        } catch (error) {
            alert(error);
        }
    }

    const orderAgain = async (cart) => {
        try {
            const token = await initCart(cartToken);
            await updateCart(token, cart);
        } catch (error) {
            alert(error);
        }
    }

    const removeCart = () => {
        if (cartToken) {
            try {
                setCartToken('');
                localStorage.setItem('cart_token', '');
                reset();
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

    const addProduct = async (meal, amount, price, itemId, itemDescription) => {
        const newItems = [
            ...items,
            { meal, amount, price, itemId, itemDescription },

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

    const selectAddress = async (address) => {
        const addressId = address ? address.id : null;
        setAddressId(addressId);
        await saveCart({ items, totalPrice, totalAmount, addressId })
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
            selectAddress,
            cartToken,
            removeCart,
            orderAgain
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;