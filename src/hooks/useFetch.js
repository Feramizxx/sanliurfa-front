import { useState } from 'react';

// NOTE: it is a basic fetching hook which will be called in other hooks 
const useFetch = (callback) => { // IMPORTANT: callback will be given from other hooks to it
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            await callback();
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetchData, isLoading, error];
}

export default useFetch;