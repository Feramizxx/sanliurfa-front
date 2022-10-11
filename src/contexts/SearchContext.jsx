
import { createContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { searchMeals } from './../api/searchMeals';
import { useContext } from 'react';
import { LinkContext } from './LinkContext';

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
    const [searchedMeals, setSearchedMeals] = useState([]);
    const [searchError, setSearchError] = useState(null);
    const navigate = useNavigate();

    const searchData = async (target) => {
        if (target !== '') {
            try {
                const data = await searchMeals(target);
                setSearchedMeals(data);
            } catch (error) {
                setSearchError(error);
            } finally {
                navigate('/searched-meals');
            }
        }
    }

    return (
        <SearchContext.Provider value={{ searchedMeals, searchData, searchError, setSearchError }}>
            {children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;