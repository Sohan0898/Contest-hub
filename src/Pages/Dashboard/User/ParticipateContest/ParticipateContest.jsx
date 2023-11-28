import { BiTask } from "react-icons/bi";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";



const ParticipateContest = () => {

  const axiosSecure = useAxiosSecure();
  const { user, loading } = useAuth();

  const { data: items = [] } = useQuery({
    queryKey: ["participates", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/participates?email=${user?.email}`);
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


    return (
        <div>
            <div>
      <div className="my-4 mt-10">
        <h2 className="text-3xl font-bold ">
          Submitted Contest By Participate: {items.length}
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
              <th>Participate Name</th>
              <th>Participate Email</th>
              <th>Status</th>
              <th>Task Submitted</th>
              <th>Make Winner</th>
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
                      <img src={items.contestImage} alt={items.contestName} />
                    </div>
                  </div>
                </td>
                <td>{items.contestName}</td>
                <td>{items.participateName}</td>
                <td>{items.participateEmail}</td>
                <td>{items.role}</td>
                <td>{items.attempt}</td>
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
        </div>
    );
};

export default ParticipateContest;