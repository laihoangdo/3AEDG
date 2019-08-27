// import { FETCH_BLOGS } from './action';
import {FETCH_BLOGS_ERROR, FETCH_BLOGS_DETAIL_SUCCESS, FETCH_BLOGS_SUCCESS} from "./action";
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



const initialState ={
    blogs : [],
    blogDetail : {}
}

// function blogReducer(state = initialState, action) {
//     return dispatch => {
//         dispatch(fetchBlogsAction());
//         fetch('https://nodejssalesforce.herokuapp.com/blogs')
//             .then(res => res.json())
//             .then(res => {
//                 console.log('res' , res);
//                 if(res.error) {
//                     throw(res.error);
//                 }
//                 // dispatch(FETCH_BLOGS_SUCCESS(res.products));
//                 return res;
//             })
//             .catch(error => {
//                 // dispatch(FETCH_BLOGS_ERROR(error));
//                 throw (error);
//             })
//     }
// }

const blogReducer = (state = initialState, action) =>{
    console.log('accction' , action);
    switch(action.type) {
        case FETCH_BLOGS_SUCCESS:
            return {
                ...state,
                blogs: action.payload,
            };
        case FETCH_BLOGS_ERROR:
            console.log(action.payload)
            return{
                ...state
            };
        case FETCH_BLOGS_DETAIL_SUCCESS:
            return{
                ...state,
                blogDetail: action.payload
            };
        default:
            return state
    }

}

export default blogReducer;