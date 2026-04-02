import React from 'react';
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to="/">
        <div className='flex items-end'>
            <img src="https://i.ibb.co.com/1tj7yWL6/logo.png" alt="" />
            <h3 className="text-3xl font-bold -ms-2.5">ZapShift</h3>
        </div>
        </Link>
    );
};

export default Logo;