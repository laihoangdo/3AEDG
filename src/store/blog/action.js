export const FETCH_BLOGS_SUCCESS = 'FETCH_BLOGS_SUCCESS';
export const FETCH_BLOGS_DETAIL_SUCCESS = 'FETCH_BLOGS_DETAIL_SUCCESS';
export const FETCH_BLOGS_DETAIL_ERROR = 'FETCH_BLOGS_DETAIL_ERROR';
export const FETCH_BLOGS_ERROR= 'FETCH_BLOGS_ERROR';

// export function fetchBlogsAction (value) {
//     console.log('trigger action');
//     return ({type: FETCH_BLOGS_SUCCESS, value})
// }

// export  const fetchBlogsAction = () =>{
//     return async dispatch => {
//         const res = await fetch('https://nodejssalesforce.herokuapp.com/blogs');
//         const data = await res.json();
//         dispatch({
//             type: FETCH_BLOGS_SUCCESS,
//             payload: data
//         })
//     }
// }
export  const fetchBlogsAction = ()=> async dispatch =>{

    try {
        const res = await fetch('https://nodejssalesforce.herokuapp.com/blogs' , { method: 'GET' ,mode: 'cors' ,Headers: {'Access-Control-Allow-Origin':'*', 'Content-Type': 'application/json'} });
        const data = await res.json();
        dispatch({
            type: FETCH_BLOGS_SUCCESS,
            payload: data
        })
    }catch (e) {
        dispatch({
            type: FETCH_BLOGS_ERROR,
            payload: e.response.data
        })
    }

}
export  const fetchBlogsLimitAction = ()=> async dispatch =>{

    try {
        const res = await fetch('https://nodejssalesforce.herokuapp.com/blogs-limit' , { method: 'GET' ,mode: 'cors' ,Headers: {'Access-Control-Allow-Origin':'*', 'Content-Type': 'application/json'} });
        const data = await res.json();
        dispatch({
            type: FETCH_BLOGS_SUCCESS,
            payload: data
        })
    }catch (e) {
        dispatch({
            type: FETCH_BLOGS_ERROR,
            payload: e.response.data
        })
    }

}

export const fetchBlogDetail = (id) => async dispatch =>{
    try {
        const res = await fetch('https://nodejssalesforce.herokuapp.com/blogs/' + id);
        const data = await res.json();
        dispatch({
            type: FETCH_BLOGS_DETAIL_SUCCESS,
            payload: data
        })
    }catch (e) {
        dispatch({
            type: FETCH_BLOGS_DETAIL_ERROR,
            payload: e.response.data
        })
    }
};