import React from 'react';

const Vacancy = ({vacancy, onClick}) => {
    return (
        <div className='shadow-vacancy w-[40em] mb-6 rounded-xl flex justify-between items-center p-6 hover:cursor-pointer' onClick={onClick}>
            <div className='ml-6'>
                <h3 className='font-medium text-2xl'> {vacancy.name} </h3>
                <div className='flex justify-between w-56 mt-3'>
                    <div className='flex items-center'>
                        <svg className='mr-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5008 4H19.3342V5.33333H21.3342V20H2.66749V5.33333H4.66749V4H2.50082C2.34498 4.0026 2.19118 4.03588 2.0482 4.09794C1.90522 4.15999 1.77587 4.24961 1.66753 4.36166C1.55919 4.47371 1.47399 4.60601 1.41679 4.751C1.35959 4.89599 1.33151 5.05083 1.33416 5.20667V20.1267C1.33151 20.2825 1.35959 20.4373 1.41679 20.5823C1.47399 20.7273 1.55919 20.8596 1.66753 20.9717C1.77587 21.0837 1.90522 21.1733 2.0482 21.2354C2.19118 21.2974 2.34498 21.3307 2.50082 21.3333H21.5008C21.6567 21.3307 21.8105 21.2974 21.9534 21.2354C22.0964 21.1733 22.2258 21.0837 22.3341 20.9717C22.4425 20.8596 22.5277 20.7273 22.5849 20.5823C22.6421 20.4373 22.6701 20.2825 22.6675 20.1267V5.20667C22.6701 5.05083 22.6421 4.89599 22.5849 4.751C22.5277 4.60601 22.4425 4.47371 22.3341 4.36166C22.2258 4.24961 22.0964 4.15999 21.9534 4.09794C21.8105 4.03588 21.6567 4.0026 21.5008 4Z" fill="#BB2025"/>
                            <path d="M5.33398 9.33334H6.66732V10.6667H5.33398V9.33334Z" fill="#BB2025"/>
                            <path d="M9.33398 9.33334H10.6673V10.6667H9.33398V9.33334Z" fill="#BB2025"/>
                            <path d="M13.334 9.33334H14.6673V10.6667H13.334V9.33334Z" fill="#BB2025"/>
                            <path d="M17.334 9.33334H18.6673V10.6667H17.334V9.33334Z" fill="#BB2025"/>
                            <path d="M5.33398 12.6667H6.66732V14H5.33398V12.6667Z" fill="#BB2025"/>
                            <path d="M9.33398 12.6667H10.6673V14H9.33398V12.6667Z" fill="#BB2025"/>
                            <path d="M13.334 12.6667H14.6673V14H13.334V12.6667Z" fill="#BB2025"/>
                            <path d="M17.334 12.6667H18.6673V14H17.334V12.6667Z" fill="#BB2025"/>
                            <path d="M5.33398 16H6.66732V17.3333H5.33398V16Z" fill="#BB2025"/>
                            <path d="M9.33398 16H10.6673V17.3333H9.33398V16Z" fill="#BB2025"/>
                            <path d="M13.334 16H14.6673V17.3333H13.334V16Z" fill="#BB2025"/>
                            <path d="M17.334 16H18.6673V17.3333H17.334V16Z" fill="#BB2025"/>
                            <path d="M6.66667 6.66667C6.84348 6.66667 7.01305 6.59643 7.13807 6.47141C7.2631 6.34638 7.33333 6.17681 7.33333 6V2C7.33333 1.82319 7.2631 1.65362 7.13807 1.5286C7.01305 1.40357 6.84348 1.33334 6.66667 1.33334C6.48986 1.33334 6.32029 1.40357 6.19526 1.5286C6.07024 1.65362 6 1.82319 6 2V6C6 6.17681 6.07024 6.34638 6.19526 6.47141C6.32029 6.59643 6.48986 6.66667 6.66667 6.66667Z" fill="#BB2025"/>
                            <path d="M17.3327 6.66667C17.5095 6.66667 17.6791 6.59643 17.8041 6.47141C17.9291 6.34638 17.9993 6.17681 17.9993 6V2C17.9993 1.82319 17.9291 1.65362 17.8041 1.5286C17.6791 1.40357 17.5095 1.33334 17.3327 1.33334C17.1559 1.33334 16.9863 1.40357 16.8613 1.5286C16.7363 1.65362 16.666 1.82319 16.666 2V6C16.666 6.17681 16.7363 6.34638 16.8613 6.47141C16.9863 6.59643 17.1559 6.66667 17.3327 6.66667Z" fill="#BB2025"/>
                            <path d="M8.66602 4H15.3327V5.33333H8.66602V4Z" fill="#BB2025"/>
                        </svg>
                        <p> {vacancy.date} </p>
                    </div>
                    <div className='flex items-center'>
                        <svg className='mr-1' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#BB2025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 2C9.87827 2 7.84344 2.84285 6.34315 4.34315C4.84285 5.84344 4 7.87827 4 10C4 11.892 4.402 13.13 5.5 14.5L12 22L18.5 14.5C19.598 13.13 20 11.892 20 10C20 7.87827 19.1571 5.84344 17.6569 4.34315C16.1566 2.84285 14.1217 2 12 2V2Z" stroke="#BB2025" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p> {vacancy.location}</p>
                    </div>
                </div>
            </div>
            <div>
                <img className='w-9 h-20 float-right mr-6' src={require('../../assets/img/tower.png')} alt="a tower"/>
            </div>
        </div>
    );
};

export default Vacancy;