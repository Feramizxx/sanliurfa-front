import { useState, useEffect } from 'react';
import { getNews } from '../api/getNews';
import useFetch from './useFetch';

const useFetchNews = (lang = 'en', limit) => {
    const [news, setNews] = useState([]);
    const [fetchNews, newsAreLoading, newsError] = useFetch(async () => {
        const data = await getNews(lang, limit);
        setNews(data);
    });

    useEffect(() => {
        fetchNews();
    }, [lang]);

    return { news, newsAreLoading, newsError };
}

export default useFetchNews;