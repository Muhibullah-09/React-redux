export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE'


// export const fetchPosts = () => {
//   return (dispatch) => {
//     try {
//       dispatch(fetchPostsRequest())
//       dispatch(fetchPostsSuccess(posts))
//     } catch (error) {
//       dispatch(fetchPostsFailure(error.message))
//     }
//   }
// }

export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST
  }
}

export const fetchPostsSuccess = posts => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: posts
  }
}

export const fetchPostsFailure = error => {
  return {
    type: FETCH_POSTS_FAILURE,
    payload: error
  }
}