import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { MdAddTask, MdOutlineRemoveDone } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";

const ApproveRider = () => {
  const axiosSecure = useAxiosSecure();

  const { data: riders = [] } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      console.log(res.data);
      return res.data;
    },
  });
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
                <td>{rider.status}</td>
                <td className="flex gap-3"> 
                    <button className="btn btn-sm">
                        <MdAddTask size={20} />
                    </button>
                    <button className="btn btn-sm">
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
