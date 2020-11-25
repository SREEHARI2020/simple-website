import React ,{ useContext,useEffect } from 'react';
import{ BlogContext } from '../context/BlogContext';
import{useParams} from 'react-router-dom';

export const Post = () => {
    const context = useContext(BlogContext);
    const{ getPostsbyId,currentBlogPost}=context;
    const {id}=useParams();
   useEffect(()=>{
    getPostsbyId({id});
   console.log(currentBlogPost)

   },[]);
    return (
        
        <div className='post'>
            {
                currentBlogPost?(
                <>
                <div className='post-image' style={{
                    width:'100%',
                    height:'300px',
                    backgroundImage:`url('${currentBlogPost.image}')`,
                    backgroundPosition:'center',
                    backgroundRepeat:'no-repeat',
                    backgroundSize:'cover',
                    position:'relative',
                    borderTopRightRadius:'2px',
                    borderTopLeftRadius:'2px'
                }}> </div>
                <div className="post-content">
                <h2>{currentBlogPost.title}</h2>
                <p>{currentBlogPost.content}</p>
            </div>
            </>
                
                
                ):
                (<div> Loading...</div>)



            }
           
        </div>
    )
}
