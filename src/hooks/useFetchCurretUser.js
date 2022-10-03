import { useState, useContext } from 'react';
import { useEffect } from 'react';
import { getCurrentUser } from '../api/getCurrentUser';
import { AuthContext } from '../contexts/AuthContext';
import useFetch from './useFetch';

const useFetchCurrentUser = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const { token } = useContext(AuthContext)
    const [fetchUser, isUserLoading, userError] = useFetch(async () => {
        const data = await getCurrentUser(token);
        setCurrentUser(data);
    })

    useEffect(() => {
        fetchUser();
    }, [token]);

    return { currentUser, isUserLoading, userError };
}

export default useFetchCurrentUser;