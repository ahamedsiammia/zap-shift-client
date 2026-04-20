import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);
      return res.data;
    },
  });
  return (
    <div className="bg-white shadow-lg  rounded-2xl m-5 p-5">
      <h1 className="text-4xl font-bold">Payment History</h1>
      <div className="overflow-x-auto mt-2">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Parcel Info</th>
              <th>Recipient Info</th>
              <th>Tracking Number</th>
              <th>Payment Info</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index+1}</th>
                <td>{payment.parcelName}</td>
                <td>Quality Control Specialist</td>
                <td>{payment.trackingId}</td>
                <td>💰{payment.amount} ({payment.paymentStatus})</td>
                <td>
                    <button className="btn btn-sm bg-[#94C6CB]">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
