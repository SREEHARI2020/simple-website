import React from 'react';
import{Link } from 'react-router-dom';

export const PostCard = ({item}) => {
    return (
        <div className="card">
            <div className="card-image" style={{
                width:'100%',
                height:'200px',
                backgroundImage:`url('${item.image}')`,
                backgroundPosition:'center',
                backgroundRepeat:'no-repeat',
                backgroundSize:'cover',
                position:'relative',
                borderTopRightRadius:'2px',
                borderTopLeftRadius:'2px'
            }}> 

            </div>
            <div className="card-info">
                
                <div className="card-title"></div>
                <Link to={`/${item.id}`}><p> {item.title} </p></Link> 
            </div>
            <div className="card-author-section">
                <p>{item.author}</p>
                <p>{item.date}</p>
            </div>
        </div>
    )
}
