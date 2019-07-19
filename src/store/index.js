import { combineReducers } from 'redux';
import blogReducer from "./blog";


const rootReducer = combineReducers({
    blogs: blogReducer
});

export default rootReducer;