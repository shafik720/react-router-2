import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav style={{marginTop:"50px"}}>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/Friends">Friends</Link>                
            </nav>
        </div>
    );
};

export default Header;