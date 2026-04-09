import React from 'react';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import LoadingPage from '../../Loading/Loading';
import { useQuery } from '@tanstack/react-query';

const Payment = () => {
    const {parcelId}=useParams();
    const axiosSecure =useAxiosSecure();

    const {isLoading ,data: parcel }= useQuery({
        queryKey:["parcel", parcelId],
        queryFn:async ()=>{
            const res =await axiosSecure.get(`/parcels/${parcelId}`)
            return res.data
        }
    })

    if(isLoading){
        return <LoadingPage></LoadingPage>
    }
    return (
        <div className='text-center mt-5'>
            <p>please pay , parcel Name : {parcel.parcelName}</p>

            <button className='btn btn-primary text-black'>Pay</button>
        </div>
    );
};

export default Payment;