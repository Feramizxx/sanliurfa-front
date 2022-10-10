import { useState } from 'react';


const sortData = (data, cb, selected) => {
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (cb(item) === cb(selected)) {
            data[i] = data[0];
            data[0] = item;
            break;
        }
    }

    return data;
}

const Dropdown = ({ data, setCurrentCb, setData, sortCb, displayCb }) => {
    const [isVisible, setIsVisible] = useState(false);

    const onClickItem = (item) => {
        setCurrentCb(item);
        setData(sortData(data, sortCb, item));
        setIsVisible(false);
    }

    const onClickCurrent = () => {
        setIsVisible(!isVisible);
    }

    const first = data[0];
    return (
        <div className='hover:cursor-pointer my-2'>
            <div className='flex items-center justify-between w-full max-w-[300px] bg-white text-black p-3 rounded' onClick={() => onClickCurrent(first)}>
                <p> {displayCb(first)} </p>
                <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.57325 0.117705L5.37457 4.3019L1.17589 0.117705C1.10088 0.0427958 1.00017 0.000858763 0.895309 0.000858763C0.790445 0.000858763 0.689742 0.0427958 0.614726 0.117705C0.578403 0.154088 0.549546 0.197515 0.529847 0.245443C0.510147 0.29337 0.5 0.344835 0.5 0.396822C0.5 0.44881 0.510147 0.500274 0.529847 0.548202C0.549546 0.59613 0.578403 0.639557 0.614726 0.67594L5.08139 5.12809C5.15983 5.20625 5.26503 5.25 5.37457 5.25C5.48411 5.25 5.58931 5.20625 5.66776 5.12809L10.1344 0.6768C10.171 0.640389 10.2001 0.596855 10.2199 0.548768C10.2398 0.500682 10.25 0.449017 10.25 0.396822C10.25 0.344628 10.2398 0.292963 10.2199 0.244876C10.2001 0.19679 10.171 0.153256 10.1344 0.116845C10.0594 0.0419366 9.95869 0 9.85383 0C9.74897 0 9.64826 0.0419366 9.57325 0.116845V0.117705Z" fill="black" />
                </svg>
            </div>
            {isVisible && data.length !== 1 &&
                <ul className='bg-white p-3 rounded absolute w-full max-w-[300px] mt-1'>
                    {data.leght <= 1 ? [] : data.filter((item, index) => index != 0).map((item) => {
                        const content = displayCb(item);
                        return (
                            <DropdownOption
                                key={content}
                                cb={() => onClickItem(item)}
                            >
                                {content}
                            </DropdownOption>
                        )
                    })}
                </ul>
            }
        </div>
    );
}

const DropdownOption = ({ children, cb }) => {
    return (
        <div className='text-black' onClick={cb}> {children} </div>
    )
}

export default Dropdown;