import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";

const rootReducer = combineReducers({currentCategory: categoriesReducer});

export default rootReducer;