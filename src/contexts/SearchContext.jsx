
import { createContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { searchMeals } from './../api/searchMeals';

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
    const [searchedMeals, setSearchedMeals] = useState([]);
    const navigate = useNavigate();

    const searchData = async (taget) => {
        try {
            const data = await searchMeals(taget);
            console.log(data);
            setSearchedMeals(data);
            navigate('/searched-meals');
        } catch (error) {
            alert(error);
        }
    }

    return (
        <SearchContext.Provider value={{ searchedMeals, searchData }}>
            {children}
        </SearchContext.Provider>
    );
}

export default SearchContextProvider;