export const FETCH_BLOGS_SUCCESS = 'FETCH_BLOGS_SUCCESS';
export const FETCH_BLOGS_PENDING = 'FETCH_BLOGS_PENDING';
export const FETCH_BLOGS_ERROR= 'FETCH_BLOGS_ERROR';

export function fetchBlogsAction (value) {
    console.log('trigger action');
    return ({type: FETCH_BLOGS_SUCCESS, value})
}