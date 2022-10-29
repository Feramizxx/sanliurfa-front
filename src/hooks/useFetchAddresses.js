import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import { getAddresses } from './../api/getAddresses';

const useFetchAddresses = (token) => {
    const [refetch, setRefetch] = useState(false);
    const [addresses, setAddresses] = useState([]);
    const [fetchAddresses, addressesAreLoading, addressesError] = useFetch(async () => {
        const data = await getAddresses(token);
        setAddresses(data);
    })

    useEffect(() => {
        fetchAddresses();
    }, [token, refetch]);

    return { addresses, addressesAreLoading, addressesError, setAddresses, setRefetch };
}

export default useFetchAddresses;