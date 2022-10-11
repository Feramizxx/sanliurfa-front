import { useContext, useState } from "react";
import { SearchContext } from './../../contexts/SearchContext';
import Meal from "../../components/items/Meal";
import { AxiosError } from 'axios';
import MyModal from "../../components/MyModal";
import useResetLink from './../../hooks/useResetLink';

const errorMessage = 'No meals are found...';

const SearchedMenu = () => {
    const { searchedMeals, searchError, setSearchError } = useContext(SearchContext);
    const [modal, setModal] = useState(false);
    useResetLink();

    if (searchError && searchError instanceof AxiosError && searchError.response.status === 404) {
        if (!modal) {
            setModal(true);
            setSearchError(null);
        }
    }

    return (
        <>
            <MyModal visible={modal} onClose={() => setModal(false)}>
                <p className="bg-white text-red font-bold rounded-2xl p-6 text-xl"> {errorMessage} </p>
            </MyModal>
            <div className="bg-red pt-48 pb-24 px-12 flex justify-center">
                {searchedMeals.length !== 0 ?
                    <div className="w-full max-w-[1200px]">
                        <ul id={'menu-meals'} className={'flex flex-wrap justify-between sm:flex-nowrap sm:flex-col sm:items-center'}>
                            {searchedMeals.map((meal) => {
                                return (
                                    <li className={'flex mb-12'} key={meal.sku}>
                                        <Meal meal={meal} type={'list'} />
                                    </li>
                                )
                            })}
                        </ul>
                    </div> :
                    <div className="flex items-center justify-center text-white font-bold text-xl h-[60vh]">
                        {errorMessage}
                    </div>
                }
            </div>
        </>
    );
}

export default SearchedMenu;