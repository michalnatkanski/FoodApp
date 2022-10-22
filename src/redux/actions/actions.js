import { CHANGE_CATEGORIES, SEARCH_ITEMS } from "./actionTypes";

export const ChangeCategories = payload => ({type: CHANGE_CATEGORIES, payload});

export const SearchItems = payload => ({type: SEARCH_ITEMS, payload});