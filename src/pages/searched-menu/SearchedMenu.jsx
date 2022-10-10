import { useContext } from "react";
import { SearchContext } from './../../contexts/SearchContext';
import Meal from "../../components/items/Meal";

const SearchedMenu = () => {
    const { searchedMeals } = useContext(SearchContext);
    console.log(searchedMeals);

    return (
        <div className="bg-red pt-48 pb-24 px-12 flex justify-center">
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
            </div>
        </div>
    );
}

export default SearchedMenu;