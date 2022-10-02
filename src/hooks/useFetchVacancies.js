
import { useState } from 'react';
import { useEffect } from 'react';
import useFetch from './useFetch';
import { getVacancies } from './../api/getVacancies';

const useFetchVacancies = (lang = 'en') => {
    const [vacancies, setVacancies] = useState([]);
    const [fetchVacancies, vacanciesAreLoading, vacanciesError] = useFetch(async () => {
        const data = await getVacancies(lang);
        setVacancies(data);
    })

    useEffect(() => {
        fetchVacancies();
    }, [lang])

    return { vacancies, vacanciesAreLoading, vacanciesError };
}

export default useFetchVacancies;