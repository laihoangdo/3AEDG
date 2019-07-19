// import { FETCH_BLOGS } from './action';
//
// const initialState ={
//     isMobile: window.innerWidth < 768,
//     isSidebarOpen: false,
// }
// const blogReducer = (state = initialState, action) =>{
//     switch(action.type) {
//         case FETCH_BLOGS:
//             return {
//                 ...state,
//                 isMobile: action.value,
//             }
//         default:
//             return state
//     }
//
// }
//
// export default blogReducer;


import {FETCH_BLOGS_ERROR, FETCH_BLOGS_PENDING, FETCH_BLOGS_SUCCESS} from "./action";
const initialState ={
    blogs : []
}

function blogReducer(state = initialState, action) {
    return dispatch => {
        dispatch(FETCH_BLOGS_SUCCESS());
        fetch('https://nodejssalesforce.herokuapp.com/blogs')
            .then(res => res.json())
            .then(res => {
                console.log('res' , res);
                if(res.error) {
                    throw(res.error);
                }
                // dispatch(FETCH_BLOGS_SUCCESS(res.products));
                return res;
            })
            .catch(error => {
                // dispatch(FETCH_BLOGS_ERROR(error));
                throw (error);
            })
    }
}
// const blogReducer = (state = initialState, action) =>{
//     switch(action.type) {
//         case FETCH_BLOGS_SUCCESS:
//             return {
//                 ...state,
//                 blogs: action.value,
//             }
//         default:
//             return state
//     }
//
// }

export default blogReducer;