import { combineReducers } from "redux";
import reducers from "./categoriesReducer";

const { categoriesReducer, searchReducer } = reducers;

const rootReducer = combineReducers({
    currentCategory: categoriesReducer,
    searchValue: searchReducer,
});

export default rootReducer;
