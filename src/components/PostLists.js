import React ,{ useContext,useEffect } from 'react';
import{ BlogContext } from '../context/BlogContext';
export const PostLists = () => {
    const context = useContext(BlogContext);
    const{getPosts, blogPosts,loading}=context;
   useEffect(()=>{
       getPosts();

   },[]);
    console.log(blogPosts)
    return (
        <div>
            PostList
        </div>
    )
}
