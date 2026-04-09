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

    const handlePayment = async() =>{
        const paymentInfo ={
            senderEmail : parcel.senderEmail,
            cost : parcel.cost,
            parcelId : parcel._id,
            parcelName: parcel.parcelName
        }

        const res = await axiosSecure.post("/create-checkout-session",paymentInfo)
        console.log(res.data);
        window.location.href = res.data.url
    }

    if(isLoading){
        return <LoadingPage></LoadingPage>
    }
    return (
        <div className='text-center mt-5'>
            <p>please pay ${parcel.cost} for : {parcel.parcelName}</p>

            <button onClick={handlePayment} className='btn btn-primary text-black'>Pay</button>
        </div>
    );
};

export default Payment;