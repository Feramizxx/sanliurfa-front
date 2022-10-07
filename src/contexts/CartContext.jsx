
import { createContext } from 'react';
import { useState } from 'react';
import { roundPrice } from './../helpers/index';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [totalAmount, setTotalAmount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [items, setItems] = useState([]);

    const addProduct = (meal, amount, price) => {
        setItems([...items, {
            meal,
            amount,
            price
        }]);
        setTotalAmount(totalAmount + amount);
        setTotalPrice(roundPrice(totalPrice + price));
    }

    const incrementProduct = (name) => {
        const index = items.findIndex((item) => item.meal.name === name);
        const item = items[index];
        const price = item.price / item.amount;
        items[index] = {
            ...item,
            price: roundPrice(item.price + price),
            amount: item.amount + 1
        }
        setTotalAmount(totalAmount + 1);
        setTotalPrice(roundPrice(totalPrice + price));
    }

    const decrementProduct = (name) => {
        const index = items.findIndex((item) => item.meal.name === name);
        const item = items[index];
        const price = item.price / item.amount;
        items[index] = {
            ...item,
            price: roundPrice(item.price - price),
            amount: item.amount - 1
        }
        setTotalAmount(totalAmount - 1);
        setTotalPrice(roundPrice(totalPrice - price));
    }

    const removeProduct = (name) => {
        const item = items.find((item) => item.meal.name === name);
        const amount = item.amount;
        const price = item.price;

        setItems(items.filter((item) => item.meal.name !== name));
        setTotalAmount(totalAmount - amount);
        setTotalPrice(roundPrice(totalPrice - price));
    }

    return (
        <CartContext.Provider value={{
            totalAmount,
            totalPrice,
            items,
            addProduct,
            incrementProduct,
            removeProduct,
            decrementProduct
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;