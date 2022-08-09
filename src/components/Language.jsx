import React from 'react';

const Language = ({language,isCurrent,flag,onClick,display,mt}) => {
    return (
        <div
            style={{
                marginTop: display? mt : 0
            }}
            onClick={onClick}
            className={`
                w-[50px] transition-all delay-200 flex items-center justify-between pr-1
                rounded-3xl bg-inherit shadow-black shadow-sm hover:cursor-pointer ${!isCurrent && !display? 'absolute opacity-0' : ''}
                ${display? `absolute opacity-1`: ''}
                `}
        >
            <img className='w-6 h6 rounded-2xl mr-1' src={flag} alt='flag'/>
            {isCurrent?
                <svg className='w-[11px] h-[6px] viewBox="0 0 11 6" mr-1' fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.57325 0.117705L5.37457 4.3019L1.17589 0.117705C1.10088 0.0427958 1.00017 0.000858763 0.895309 0.000858763C0.790445 0.000858763 0.689742 0.0427958 0.614726 0.117705C0.578403 0.154088 0.549546 0.197515 0.529847 0.245443C0.510147 0.29337 0.5 0.344835 0.5 0.396822C0.5 0.44881 0.510147 0.500274 0.529847 0.548202C0.549546 0.59613 0.578403 0.639557 0.614726 0.67594L5.08139 5.12809C5.15983 5.20625 5.26503 5.25 5.37457 5.25C5.48411 5.25 5.58931 5.20625 5.66776 5.12809L10.1344 0.6768C10.171 0.640389 10.2001 0.596855 10.2199 0.548768C10.2398 0.500682 10.25 0.449017 10.25 0.396822C10.25 0.344628 10.2398 0.292963 10.2199 0.244876C10.2001 0.19679 10.171 0.153256 10.1344 0.116845C10.0594 0.0419366 9.95869 0 9.85383 0C9.74897 0 9.64826 0.0419366 9.57325 0.116845V0.117705Z" fill="black"/>
                </svg> :
                <p className='text-[12px] mr-1'> {language} </p>
            }
        </div>
    );
};

export default Language;