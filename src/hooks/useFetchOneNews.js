import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import { getOneNews } from './../api/getOneNews';

const useFetchOneNews = (id) => {
    const [singleNews, setSingleNews] = useState([]);
    const [fetchSingleNews, singleNewsIsLoading, singleNewsError] = useFetch(async () => {
        const data = await getOneNews(id);
        setSingleNews(data);
    })

    useEffect(() => {
        fetchSingleNews();
    }, [id])

    return { singleNews, singleNewsIsLoading, singleNewsError };
}

export default useFetchOneNews;