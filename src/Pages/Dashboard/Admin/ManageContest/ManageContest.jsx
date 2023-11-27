import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

import { MdOutlineTaskAlt } from "react-icons/md";
import toast from "react-hot-toast";

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
                <td className="text-red-600">{items.date}</td>
                <td>
                  <button className="btn btn-square btn-ghost  ">
                    <FaEdit
                      className="text-third 
                                    text-xl"
                    ></FaEdit>
                  </button>
                </td>
                <td>
                  <button className="btn btn-square btn-ghost ">
                    <FaTrashAlt className="text-lg text-red-600"></FaTrashAlt>
                  </button>
                </td>
                <td className="text-green-500 font-bold">
                  {items.status === "approved" ? (
                    "Approved ✅"
                  ) : (
                    <button
                      onClick={() => handleMakeApproved(items)}
                      className="btn btn-square btn-ghost "
                    >
                      <MdOutlineTaskAlt className="text-xl text-green-600"></MdOutlineTaskAlt>
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
