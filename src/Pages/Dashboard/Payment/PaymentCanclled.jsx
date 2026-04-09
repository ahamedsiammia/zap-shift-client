import React from 'react';
import { Link } from 'react-router';

const PaymentCanclled = () => {
    return (
        <div>
            <h1>Payment is cancelled . please try again 👇</h1>

            <Link to={"/dashboard/my-parcels"}>
            <button className='btn btn-primary text-black'>Try Again</button>
            </Link>
            
        </div>
    );
};

export default PaymentCanclled;