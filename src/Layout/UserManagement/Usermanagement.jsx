import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUserShield } from "react-icons/fa";
import { FiShieldOff } from "react-icons/fi";
import Swal from "sweetalert2";

const Usermanagement = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
console.log(users)
  const handleUserRole = (user, role) => {
    const roleInfo = { role: role };
    axiosSecure.patch(`/users/${user?._id}`, roleInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top",
          icon: "success",
          title:
            role === "admin"
              ? `${user.displayName} marked as an admin`
              : `${user.displayName} removed from admin`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const blockAdmin = (user) => {
    handleUserRole(user, "user");
  };

  const addAdmin = (user) => {
    handleUserRole(user, "admin");
  };

  return (
    <div>
      <div className="overflow-x-auto bg-white  m-5 rounded-xl">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th> No </th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Admin Action</th>
              <th>Other Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th key={index}>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photoURL}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.displayName}</div>
                      <div className="text-sm opacity-50">user.status</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <th>
                  {user.role === "admin" ? (
                    <button
                      onClick={() => blockAdmin(user)}
                      className="btn btn-error btn-xs"
                    >
                      <FiShieldOff size={20} />
                    </button>
                  ) : (
                    <button
                      onClick={() => addAdmin(user)}
                      className="btn bg-green-500 btn-xs"
                    >
                      <FaUserShield size={20} />
                    </button>
                  )}
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">Action</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Usermanagement;
