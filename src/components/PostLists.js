import React ,{ useContext,useEffect } from 'react';
import{ BlogContext } from '../context/BlogContext';
import {PostCard} from './PostCard'
export const PostLists = () => {
    const context = useContext(BlogContext);
    const{getPosts, blogPosts,loading}=context;
   useEffect(()=>{
       getPosts();

   },[]);
    console.log(blogPosts)
    return (
        <div className='posts'>
            <div>
                <h2>
           {
           !loading?(<div className="container">{blogPosts.map((item,i) => <PostCard item={item} key={i}/>)}</div>)
           
           :(<div>Loading...</div>)
           }

                </h2>
            </div>
        </div>
    );
}
