
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { searchMeals } from './../api/searchMeals';
import { getPageFromLink } from '../helpers';

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
    const _search = localStorage.getItem('search');

    const [searchedMeals, setSearchedMeals] = useState([]);
    const [searchError, setSearchError] = useState(null);
    const navigate = useNavigate();

    const searchData = async (target) => {
        const page = getPageFromLink();

        if (target !== '') {
            try {
                const data = await searchMeals(target);
                setSearchedMeals(data);
                localStorage.setItem('search', target);
            } catch (error) {
                setSearchError(error);
            } finally {
                if (page !== 'searched-meals') {
                    navigate('/searched-meals');
                }
            }
        }
    }

    useEffect(() => {
        const target = _search || '';
        searchData(target);
    }, []);

    return (
        <SearchContext.Provider value={{ searchedMeals, searchData, searchError, setSearchError }}>
            {children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;