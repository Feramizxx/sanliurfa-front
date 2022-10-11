import { useState, useEffect, useContext } from 'react';
import useFetch from './useFetch';
import { getOneNews } from './../api/getOneNews';
import { LanguageContext } from './../contexts/LanguageContext';

const useFetchOneNews = (id) => {
    const { value } = useContext(LanguageContext);
    const [singleNews, setSingleNews] = useState([]);
    const [fetchSingleNews, singleNewsIsLoading, singleNewsError] = useFetch(async () => {
        const data = await getOneNews(id, value);
        setSingleNews(data);
    })

    useEffect(() => {
        fetchSingleNews();
    }, [id, value])

    return { singleNews, singleNewsIsLoading, singleNewsError };
}

export default useFetchOneNews;