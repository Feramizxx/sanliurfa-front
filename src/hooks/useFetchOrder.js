import { useState, useEffect } from "react";
import { getOrder } from "../api/getOrder";
import useFetch from "./useFetch";

const useFetchOrder = (id) => {
    const [order, setOrder] = useState(null);
    const [fetchOrder, isOrderLoading, orderError] = useFetch(async () => {
        const data = await getOrder(id);
        setOrder(data);
    })

    useEffect(() => {
        fetchOrder();
    }, [id]);

    return { order, isOrderLoading, orderError };
}

export default useFetchOrder;