import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { BiTask } from "react-icons/bi";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const CreatedContest = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const { data: items = [], refetch } = useQuery({
    queryKey: ["contests", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contests?email=${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center w-2/5 mx-auto h-[100vh]">
        <img src="https://i.ibb.co/0sDxQzn/drawing-2802.gif" alt="" />
      </div>
    );
  }

  //delete

  const handleDeleteContest = (items) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/Contests/${items._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          
          refetch();
          toast.success(`${items.name} has been deleted`);
        }
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Contest Hub | Dashboard| Created Contest </title>
      </Helmet>
      <div className="my-4 mt-10">
        <h2 className="text-3xl font-bold ">
          Your Total Added Contest: {items.length}
        </h2>
      </div>
      <div className="overflow-x-auto bg-gray-200 p-6 mt-8  shadow-md">
        <table className="table table-zebra  w-full">
          {/* head */}
          <thead className="bg-third text-white text-md">
            <tr>
              <th>#</th>
              <th>Contest Photo</th>
              <th>Contest Name</th>
              <th>Contest Tag</th>
              <th>Contest Price</th>
              <th>Status</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Submission</th>
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
                <td>{items.price}</td>
                <td>{items.status}</td>
                <td>
                  <button
                    className="btn btn-square btn-ghost"
                    disabled={items.status === "approved"}
                    title={
                      items.status === "approved"
                        ? "Cannot edit approved contest"
                        : ""
                    }
                  >
                    {items.status !== "approved" ? (
                      <Link to={`/dashboard/updateContest/${items._id}`}>
                        <FaEdit className="text-third text-xl" />
                      </Link>
                    ) : (
                      <FaEdit className={`text-third text-xl opacity-30`} />
                    )}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteContest(items)}
                    className="btn btn-square btn-ghost"
                    disabled={items.status === "approved"}
                    title={
                      items.status === "approved"
                        ? "Cannot delete approved contest"
                        : ""
                    }
                  >
                    <FaTrashAlt
                      className={`text-lg text-red-600 ${
                        items.status === "approved" ? "opacity-30" : ""
                      }`}
                    ></FaTrashAlt>
                  </button>
                </td>
                <td>
                  <Link to={'/dashboard/contestSubmitted'}><button className="btn btn-square btn-ghost ">
                    <BiTask className="text-xl text-secondary"></BiTask>
                  </button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreatedContest;
