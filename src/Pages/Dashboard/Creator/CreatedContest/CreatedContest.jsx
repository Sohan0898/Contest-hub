import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { BiTask } from "react-icons/bi";

const CreatedContest = () => {
  const axiosSecure = useAxiosSecure();

  const { data: items = [] } = useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contests");
      return res.data;
    },
  });

  return (
    <div>
      <div className="my-4 mt-10">
        <h2 className="text-3xl font-bold ">Your Total Added Contest: {items?.length}</h2>
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
                        <img
                          src={items.image}
                          alt={items.name}
                        />
                      </div>
                  </div>
                </td>
                <td>{items.name}</td>
                <td>{items.tag}</td>
                <td>{items.price}</td>
                <td>Pending</td>
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
                <td>
                  <button className="btn btn-square btn-ghost ">
                    <BiTask className="text-xl text-secondary"></BiTask>
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

export default CreatedContest;
