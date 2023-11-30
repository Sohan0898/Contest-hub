import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { FaTrashAlt, FaUserEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();
  const [selectedRoles, setSelectedRoles] = useState({});

  const { data: user = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleRoleChange = (event, user) => {
    const { value } = event.target;
    setSelectedRoles((prevRoles) => ({
      ...prevRoles,
      [user._id]: value,
    }));
  };

  const handleUpdateRole = (user) => {
    const selectedRole = selectedRoles[user._id];

    axiosSecure
      .patch(`/users/updateRole/${user._id}`, { role: selectedRole })
      .then((res) => {
        refetch();
        toast.success(res.data.message);
      })
      .catch((error) => {
        console.error("Error updating role:", error);
        toast.error("Already had this role");
      });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            toast(`"${user.name.split(/\s+/)
            .slice(0, 1)
            .join(" ")}" has been succesfully removed`, {
              icon: '❎',
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Contest Hub | Dashboard| Manage User </title>
      </Helmet>
      <div className="my-4 mt-10">
        <h2 className="text-3xl font-bold ">Total Users: {user?.length}</h2>
      </div>
      <div className="overflow-x-scroll bg-gray-200 p-6 mt-8 rounded-md  shadow-md">
        <table className="table table-zebra w-full">
          {/* head */}
          <thead className="bg-secondary text-white text-md">
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Update Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className=" rounded-lg w-12 h-12">
                      <img src={user.image} alt={user.name} />
                    </div>
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="font-semibold text-green-700">
                  {user.role.toUpperCase()}
                </td>

                <td>
                  <select
                    className="appearance-none bg-third py-1 px-3 rounded-md text-white hover:bg-blue-500 focus:outline-none focus:ring focus:border-blue-300 transition duration-300 ease-in-out transform hover:scale-105 font-medium origin-top-right"
                    value={selectedRoles[user._id] || ""}
                    onChange={(event) => handleRoleChange(event, user)}
                  >
                    <option value="admin">Admin</option>
                    <option value="creator">Creator</option>
                    <option value="user">User</option>
                  </select>
                  <button
                    onClick={() => handleUpdateRole(user)}
                    className="btn text-2xl text-secondary ml-2 btn-circle btn-ghost"
                  >
                    <FaUserEdit />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-ghost btn-circle "
                  >
                    <FaTrashAlt className="text-red-600 text-lg"></FaTrashAlt>
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

export default AllUser;
