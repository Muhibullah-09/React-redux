import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsRequest } from '../redux';

function PostsContainerSaga() {
  const postData = useSelector(state => state.post.posts.data);
  // const postData = useSelector(state => state.post.posts);
  const dispatch = useDispatch();
  // console.log(postData)
  // fetchUsers =  () => dispatch(fetchUsers())
  useEffect(() => {
    dispatch(fetchPostsRequest())
  }, [])// eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div>
      <h2>Post List</h2>
      <div>
        {
          postData &&
          postData.map((post, id) => <p key={id}>{post.id}</p>
          )}
      </div>
    </div>
  )
  // return postData.data.loading ? (
  //   <h2>Loading....</h2>
  // ) : postData.data.error ? (
  //   <h2>{postData.error}</h2>
  // ) : (
  //   <div>
  //     <h2>Post List</h2>
  //     <div>
  //       {postData.data &&
  //         // postData.posts &&
  //         postData.data.map((post, id) => <p key={id}>{post.title}</p>)}
  //     </div>
  //   </div>
  // )
}


export default PostsContainerSaga;