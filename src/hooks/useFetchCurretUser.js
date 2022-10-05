import { useState, useContext } from 'react';
import { useEffect } from 'react';
import { STORAGE_BASE_URL } from '../api/config';
import { getCurrentUser } from '../api/getCurrentUser';
import { AuthContext } from '../contexts/AuthContext';
import useFetch from './useFetch';

const useFetchCurrentUser = (refetch) => {
    const [currentUser, setCurrentUser] = useState(null);
    const { token } = useContext(AuthContext)
    const [fetchUser, isUserLoading, userError] = useFetch(async () => {
        const data = await getCurrentUser(token);
        setCurrentUser(data);
    })

    useEffect(() => {
        fetchUser();
    }, [token, refetch]);

    return {
        currentUser: currentUser, isUserLoading, userError, setCurrentUser
    };
}

export default useFetchCurrentUser;