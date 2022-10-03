
import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import { getMenu } from './../api/getMenu';

const useFetchMenu = (limit = 8) => {
    const [menu, setMenu] = useState([]);
    const [fetchMenu, isMenuLoading, menuError] = useFetch(async () => {
        const data = await getMenu(limit);
        setMenu(data);
    });

    useEffect(() => {
        fetchMenu();
    }, []);

    return { menu, isMenuLoading, menuError };
}

export default useFetchMenu;