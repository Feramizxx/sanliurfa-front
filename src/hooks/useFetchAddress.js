import { useState, useEffect } from "react";
import { getOneAddress } from "../api/getOneAddress";
import useFetch from "./useFetch";

const useFetchAddress = (id) => {
    const [address, setAddress] = useState(null);
    const [fetchAddress, isAddressLoading, addressError] = useFetch(async () => {
        const data = await getOneAddress(id);
        setAddress(data);
    })

    useEffect(() => {
        fetchAddress();
    }, [id])

    return { address, isAddressLoading, addressError };
}

export default useFetchAddress;