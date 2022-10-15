import { useState, useContext, useEffect } from 'react'
import { getOrders } from '../api/getOrders';
import { AuthContext } from '../contexts/AuthContext';
import useFetch from './useFetch';

const useFetchOrders = () => {
    const [orders, setOrder] = useState([]);
    const { token } = useContext(AuthContext);
    const [fetchOrders, ordersAreLoading, ordersError] = useFetch(async () => {
        const data = await getOrders(token);
        setOrder(data);
    })

    useEffect(() => {
        fetchOrders();
    }, [token]);

    return { orders, ordersAreLoading, ordersError };
}

export default useFetchOrders;