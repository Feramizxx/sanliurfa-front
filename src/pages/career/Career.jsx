import React, {memo} from 'react';
import Vacancies from "./Vacancies";
import CareerForm from "./CareerForm";

const Career = memo(() => {
    return (
        <div className='font-Roboto'>
            <div className='w-full bg-primary-bg h-20'/>
            <div className='sm:grid sm:grid-cols-2 mt-10'>
                <Vacancies />
                <CareerForm />
            </div>
        </div>
    );
})

export default Career;