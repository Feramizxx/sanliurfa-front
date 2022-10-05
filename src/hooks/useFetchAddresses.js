import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import { getAddresses } from './../api/getAddresses';

const useFetchAddresses = (token) => {
    const [addresses, setAddresses] = useState([]);
    const [fetchAddresses, addressesAreLoading, addressesError] = useFetch(async () => {
        const data = await getAddresses(token);
        setAddresses(data);
    })

    useEffect(() => {
        fetchAddresses();
    }, [token]);

    return { addresses, addressesAreLoading, addressesError, setAddresses };
}

export default useFetchAddresses;