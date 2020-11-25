import React from 'react';
import{Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="nav">
            <div className="container">
               <Link to='/'> <h1>React blog</h1></Link>
                
            </div>
        </div>
    )
}
