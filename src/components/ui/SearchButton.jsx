import { useContext } from 'react';
import { useState } from 'react';
import { SearchContext } from './../../contexts/SearchContext';

const SearchButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [displayEnter, setDisplayEnter] = useState(true);
    const { searchData, setTarget, target } = useContext(SearchContext);

    window.onclick = () => {
        setIsOpen(false);
    }

    const onClick = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    }

    const onChange = (e) => {
        const value = e.target.value;
        setTarget(value);

        if (value >= 19) {
            setDisplayEnter(false);
        } else {
            setDisplayEnter(true);
        }
    }

    const onInputClick = (e) => {
        e.stopPropagation();
    }

    const style = {
        opacity: isOpen ? '1' : '0'
    }

    return (
        <div className='flex flex-row justify-center'>
            <button onClick={onClick} className='navbar-icon'>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.0313 17.1033L13.0753 12.1473C14.2662 10.7175 14.8601 8.88367 14.7334 7.02719C14.6067 5.1707 13.7691 3.43454 12.3949 2.17987C11.0207 0.925202 9.2157 0.24863 7.35538 0.2909C5.49505 0.33317 3.72264 1.09103 2.40685 2.40682C1.09106 3.72261 0.3332 5.49502 0.29093 7.35535C0.24866 9.21567 0.925232 11.0207 2.1799 12.3949C3.43457 13.7691 5.17073 14.6066 7.02722 14.7334C8.8837 14.8601 10.7176 14.2662 12.1473 13.0752L17.1033 18.0312L18.0313 17.1033ZM1.62503 7.53125C1.62503 6.3631 1.97143 5.22119 2.62041 4.24991C3.2694 3.27864 4.19183 2.52162 5.27106 2.07459C6.35028 1.62756 7.53783 1.51059 8.68353 1.73849C9.82923 1.96638 10.8816 2.5289 11.7076 3.3549C12.5336 4.1809 13.0962 5.2333 13.324 6.379C13.5519 7.5247 13.435 8.71225 12.9879 9.79147C12.5409 10.8707 11.7839 11.7931 10.8126 12.4421C9.84134 13.0911 8.69943 13.4375 7.53128 13.4375C5.96538 13.4358 4.46411 12.8129 3.35685 11.7057C2.24959 10.5984 1.62677 9.09715 1.62503 7.53125Z" fill="#8F161A" />
                </svg>
            </button>
            <div className='absolute mt-7' onClick={onInputClick}>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    searchData();
                }} className='relative'>
                    <input
                        className='outline-none py-1 px-3 transition-all rounded-3xl'
                        type="text"
                        style={style}
                        onChange={onChange}
                        value={target}
                    />
                    <p
                        className='text-[12px] absolute text-gray-400 right-3 top-2'
                        style={{
                            ...style,
                            display: displayEnter ? 'block' : 'none'
                        }}
                    >
                        ENTER
                    </p>
                </form>
            </div>
        </div>
    );
};

export default SearchButton;