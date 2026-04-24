import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdAddTask, MdOutlineRemoveDone } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { LucideView } from "lucide-react";

const ApproveRider = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: riders = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      console.log(res.data);
      return res.data;
    },
  });

  const updateRiderStatus = (rider, status) => {
    const updateInfo = { status: status, email: rider.email };
    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top",
          icon: "success",
          title: `Your Application status has been ${status}`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleApproval = (rider) => {
    updateRiderStatus(rider, "approved");
  };

  const handleReject = (rider) => {
    updateRiderStatus(rider, "Rejected");
  };

const handleView = (rider) => {
  Swal.fire({
    title: `<span style="color: #1a3a3a; font-family: sans-serif;">Rider Application Details</span>`,
    html: `
      <div style="text-align: left; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 10px;">
          
          <div style="grid-column: span 2; background: #f8f9fa; padding: 10px; border-radius: 8px; border-left: 4px solid #cdec6d;">
            <p style="margin: 0; font-size: 12px; color: #666; text-transform: uppercase;">Full Name</p>
            <p style="margin: 0; font-weight: bold; font-size: 16px;">${rider.name}</p>
          </div>

          <div>
            <p style="margin: 0; font-size: 12px; color: #666;">Email</p>
            <p style="margin: 0; font-weight: 500;">${rider.email}</p>
          </div>
          <div>
            <p style="margin: 0; font-size: 12px; color: #666;">Phone</p>
            <p style="margin: 0; font-weight: 500;">${rider.phone}</p>
          </div>

          <div>
            <p style="margin: 0; font-size: 12px; color: #666;">Region</p>
            <p style="margin: 0; font-weight: 500;">${rider.region}</p>
          </div>
          <div>
            <p style="margin: 0; font-size: 12px; color: #666;">District</p>
            <p style="margin: 0; font-weight: 500;">${rider.district}</p>
          </div>

          <div style="grid-column: span 2; display: flex; gap: 10px; background: #f0f4f8; padding: 10px; border-radius: 8px;">
            <div style="flex: 1;">
               <p style="margin: 0; font-size: 11px; color: #666;">Bike Model</p>
               <p style="margin: 0; font-weight: 600;">${rider.bikeModel}</p>
            </div>
            <div style="flex: 1;">
               <p style="margin: 0; font-size: 11px; color: #666;">Reg. Number</p>
               <p style="margin: 0; font-weight: 600;">${rider.bikeReg}</p>
            </div>
          </div>

          <div>
            <p style="margin: 0; font-size: 12px; color: #666;">NID Number</p>
            <p style="margin: 0; font-weight: 500;">${rider.nid}</p>
          </div>
          <div>
            <p style="margin: 0; font-size: 12px; color: #666;">License</p>
            <p style="margin: 0; font-weight: 500;">${rider.license}</p>
          </div>

          <div style="grid-column: span 2;">
            <p style="margin: 0; font-size: 12px; color: #666;">About</p>
            <p style="margin: 0; font-style: italic; background: #fffbe6; padding: 5px; border-radius: 4px;">${rider.about}</p>
          </div>

          <div style="grid-column: span 2; display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding-top: 10px; border-top: 1px solid #eee;">
             <span style="background: #fff3cd; color: #856404; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold; text-transform: uppercase;">
                ● ${rider.status}
             </span>
             <span style="font-size: 11px; color: #999;">Applied on: ${new Date(rider.createdAt).toLocaleDateString()}</span>
          </div>

        </div>
      </div>
    `,
    showCloseButton: true,
    confirmButtonText: 'Close',
    confirmButtonColor: '#cdec6d',
    customClass: {
      confirmButton: 'text-black font-bold px-8 py-2 rounded-lg'
    }
  });
};

  return (
    <div className="bg-white my-5 mx-5 p-5 rounded-xl">
      <h1 className="text-4xl font-bold m-5 text-black">
        Riders Pending Approval : {riders.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>District</th>
              <th>Status</th>
              <th>Actions Color</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>{rider.district}</td>
                <td
                  className={`${rider.status === "approved" ? "badge  badge-primary text-black" : rider.status === "pending" ? "badge  badge-accent" : "badge  badge-error"} mt-3.5 `}
                >
                  {rider.status}
                </td>
                <td>
                  <button onClick={()=>handleView(rider)} className="btn btn-sm mx-2">
                    <LucideView />
                  </button>
                  <button
                    onClick={() => handleApproval(rider)}
                    className="btn btn-sm"
                  >
                    <MdAddTask size={20} />
                  </button>
                  <button
                    onClick={() => handleReject(rider)}
                    className="btn btn-sm mx-2"
                  >
                    <MdOutlineRemoveDone size={20} />
                  </button>
                  <button className="btn btn-sm">
                    <IoTrashOutline size={18} />
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

export default ApproveRider;
