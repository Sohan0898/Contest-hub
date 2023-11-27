import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

import { MdOutlineTaskAlt } from "react-icons/md";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageContest = () => {
  const axiosSecure = useAxiosSecure();

  const { data: items = [], refetch } = useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contests");
      return res.data;
    },
  });

  const handleMakeApproved = (items) => {
    axiosSecure.patch(`/contests/approved/${items._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        toast.success("Contest is approved now");
      }
    });
  };


  const handleDeleteContest = (items) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
        if (result.isConfirmed) {
            const res = await axiosSecure.delete(`/Contests/${items._id}`);
            // console.log(res.data);
            if (res.data.deletedCount > 0) {
                // refetch to update the ui
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${items.name} has been deleted`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }


        }
    });

  }
  return (
    <div>
      <div className="my-4 mt-10">
        <h2 className="text-3xl font-bold ">All Contest: {items?.length}</h2>
      </div>
      <div className="overflow-x-auto bg-gray-200 p-6 mt-8 rounded-md  shadow-md">
        <table className="table table-zebra  w-full">
          {/* head */}
          <thead className="bg-third text-white text-md">
            <tr>
              <th>#</th>
              <th>Contest Photo</th>
              <th>Contest Name</th>
              <th>Contest Tag</th>
              <th>Task</th>
              <th>Contest Price</th>
              <th>Prize Money</th>
              <th>Deadline</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Approve Status</th>
            </tr>
          </thead>
          <tbody>
            {items?.map((items, index) => (
              <tr key={items._id}>
                <th>{index + 1}</th>
                <td>
                  {" "}
                  <div className="avatar">
                    <div className="rounded w-16 h-16">
                      <img src={items.image} alt={items.name} />
                    </div>
                  </div>
                </td>
                <td>{items.name}</td>
                <td>{items.tag}</td>

                <td>
                  {items.task.length > 25
                    ? `${items.task.substring(0, 25)}...`
                    : items.task}
                </td>
                <td>{items.price}</td>
                <td>{items.prize}</td>
                <td className="font-semibold text-red-600">{items.date}</td>
                <td>
                  <Link to={`/dashboard/updateContest/${items._id}`}><button className="btn btn-square btn-ghost  ">
                    <FaEdit
                      className="text-third 
                                    text-xl"
                    ></FaEdit>
                  </button></Link>
                </td>
                <td>
                  <button 
                  onClick={() => handleDeleteContest(items)}
                   className="btn btn-square btn-ghost ">
                    <FaTrashAlt className="text-lg text-red-600"></FaTrashAlt>
                  </button>
                </td>
                <td className="text-green-500 font-bold">
                  {items.status === "approved" ? (
                    "Approved ✅"
                  ) : (
                    <button
                      onClick={() => handleMakeApproved(items)}
                      className="btn bg-transparent  btn-ghost tooltip tooltip-warning " data-tip="Approve Contest"
                    >
                      <MdOutlineTaskAlt className="text-2xl text-amber-400"></MdOutlineTaskAlt> 
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageContest;
