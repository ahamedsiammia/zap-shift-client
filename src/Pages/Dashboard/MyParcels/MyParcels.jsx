import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaEdit } from "react-icons/fa";
import { GrView } from "react-icons/gr";
import { IoTrash } from "react-icons/io5";
import Swal from "sweetalert2";
// import { Link } from "react-router";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [],refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });

  const handleParcelDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed){

        axiosSecure.delete(`/parcels?id=${id}`)
        .then(res =>{
            console.log(res.data);
            if(res.data. deletedCount){

                // update the ui
                refetch()
                Swal.fire({
                  title: "Deleted!",
                  text: "Your Parcel Request has been deleted.",
                  icon: "success",
                });
            }
        })

      }
        
    });
  };

  const handlePayment = async(parcel)=>{
     const paymentInfo ={
            senderEmail : parcel.senderEmail,
            cost : parcel.cost,
            parcelId : parcel._id,
            parcelName: parcel.parcelName
        }

    const res = await axiosSecure.post("/payment-checkout-session",paymentInfo)
    console.log(res.data);
    window.location.assign(res.data.url);
  }

  return (
    <div>
      this is my parcels page {parcels.length}
      <div className="overflow-x-auto p-5">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment</th>
              <th>Delivery Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr className="bg-base-200">
                <th>{index + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>
                    {
                        parcel.paymentStatus === "paid" ? 
                        <span className="text-green-500">Paid</span> :
                        // <Link to={`/dashboard/payment/${parcel._id}`}>
                        // <button className="btn btn-sm btn-primary text-black">Pay</button>
                        // </Link>
                        
                        <button onClick={()=>handlePayment(parcel)} className="btn btn-sm btn-primary text-black">Pay</button>
                        
                    }
                </td>
                <td>{parcel.DeliveryStatus}</td>
                <td className="space-x-2">
                  <button className="btn btn-sm hover:bg-primary">
                    <GrView />
                  </button>
                  <button className="btn btn-sm hover:bg-primary">
                    <FaEdit />
                  </button>
                  <button 
                  onClick={()=> handleParcelDelete(parcel._id)}
                  className="btn btn-sm hover:bg-primary">
                    <IoTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
