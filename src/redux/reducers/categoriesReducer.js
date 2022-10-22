import { CHANGE_CATEGORIES, SEARCH_ITEMS } from "../actions/actionTypes";

const INITIAL_STATE = {
    currentCategory: 'Pizza',
    searchValue: '',
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
   
    switch (action.type) {
        case CHANGE_CATEGORIES: 
            return {currentCategory: action.payload};
        default:
        return state;
    }
}

const searchReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case SEARCH_ITEMS: 
            return {searchValue: action.payload};
        default:
        return state;
    }
}

const reducers = {categoriesReducer, searchReducer};

export default reducers;