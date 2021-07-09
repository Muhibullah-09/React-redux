import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../redux';

function PostsContainer() {
  const postData = useSelector(state => state.post);
  const dispatch= useDispatch();
  // fetchUsers =  () => dispatch(fetchUsers())
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])
  return postData.loading ? (
    <h2>Loading</h2>
  ) : postData.error ? (
    <h2>{postData.error}</h2>
  ) : (
    <div>
      <h2>Post List</h2>
      <div>
        {postData &&
          postData.posts &&
          postData.posts.map((post, id) => <p key={id}>{post.title}</p>)}
      </div>
    </div>
  )
}


export default PostsContainer;