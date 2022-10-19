import { CHANGE_CATEGORIES } from "../actions/actionTypes";

const INITIAL_STATE = {currectCategory: 'pizza'};

const categoriesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_CATEGORIES: 
        return {currectCategory: handleChangeCategory(action.payload, state.currectCategory)};
        default:
        return state;
    }
}

const handleChangeCategory = (item, currectCategory) => currectCategory = item;

export default categoriesReducer;