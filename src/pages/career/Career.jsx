import React, { memo, useContext } from 'react';
import Vacancies from "./Vacancies";
import CareerForm from "./CareerForm";
import useFetchVacancies from '../../hooks/useFetchVacancies';
import PageLoader from './../../components/PageLoader';
import { LanguageContext } from '../../contexts/LanguageContext';

const Career = memo(() => {
    const { value } = useContext(LanguageContext);
    const { vacancies, vacanciesAreLoading, vacanciesError, setVacancies } = useFetchVacancies(value);

    if (vacanciesAreLoading) return <PageLoader />

    return (
        <div>
            <div className='w-full bg-primary-bg h-20' />
            <div className='min-sm:grid min-sm:grid-cols-2 mt-10'>
                <Vacancies vacancies={vacancies} vacanciesError={vacanciesError} />
                <CareerForm vacancies={vacancies} setVacancies={setVacancies} vacanciesError={vacanciesError} />
            </div>
        </div>
    );
})

export default Career;