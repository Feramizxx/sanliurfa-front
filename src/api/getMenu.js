import axios from 'axios';
import { API_BASE_URL } from './config';

export const getMenu = async (limit = 0) => {
    const url = API_BASE_URL + `menu?limit=${limit}`;
    const response = await axios.get(url);
    const data = response.data.itemCategories;

    const categories = data.map((category) => {
        return {
            id: category.id,
            name: category.name,
            meals: category.items
        };
    });

    return categories;
}

{/*
    IMPORTANT: Sanliurfa menu
    1st level --> names of categories in itemCategories
        on the first level you should iterate throuch the response.data 
        and extract categories as a map with its items 
    2nd level --> each item has its itemSizes where is located portion weight
    2nd level --> after item modifiers in itemSizes we can get the price of a product and also images related to it
    3rd level --> in itemSizes we have item modifiers 
        we can iterate through them and display their names.
        
        if the name is Mode then it is some additions for a meal 
        each of them has its prices in NOTE: prices[0].price
    
        if the name is Hazirlama vaxti we get from its items.name the time
        needed to prepare the meal it is an array of obj (DISCUSS IT)
*/}