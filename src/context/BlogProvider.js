
import React,{useReducer} from 'react';
import {BlogReducer} from './BlogReducer';
import{BlogContext} from './BlogContext';

export const BlogProvider = (props) => {
    const initialState={
        blogPosts:[],
        currentBlogPost:null,
        loading:true

   
    }
    const [state,dispatch]=useReducer(BlogReducer,initialState);

    const getPosts=()=>{
        dispatch({type:'SENDING_REQUEST'});
        fetch('/posts')
        .then(res=>res.json())
    .then(data=>{
     
      dispatch({type:'REQUEST_FINISHED'});
      dispatch({type:'SET_POSTS',payload:data});
     })
     .catch(error=>console.log(error));
    }

    return (
        <BlogContext.Provider value={{ blogPosts:state.blogPosts,
            currentBlogPost:state.currentBlogPost,
            loading:state.loading,
            getPosts:getPosts
        }}>
            {props.children}
        </BlogContext.Provider>
    )
}
