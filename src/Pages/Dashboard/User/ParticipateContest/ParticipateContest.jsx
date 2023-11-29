import { useState } from "react";
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

  const [view, setView] = useState("all");

  const filteredItems =
    view === "upcoming"
      ? items.filter((contest) => contest.paid === "yes")
      : items;

  const sortedItems = [...filteredItems].sort((a, b) =>
    view === "upcoming" ? new Date(a.deadline) - new Date(b.deadline) : 0
  );

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
        <div className="my-4 mt-10 flex justify-between items-center ">
          <h2 className="text-3xl font-bold">
            {view === "upcoming" ? "My Upcoming Contests" : "My All Contests"} :{" "}
            {filteredItems.length}
          </h2>
          <div className="flex space-x-4 mt-4">
            <button
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                view === "upcoming" ? "bg-blue-700" : ""
              }`}
              onClick={() => setView("upcoming")}
            >
              My Upcoming Contests
            </button>
            <button
              className={`bg-blue-500 hover.bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                view === "all" ? "bg-blue-700" : ""
              }`}
              onClick={() => setView("all")}
            >
              My All Contests
            </button>
          </div>
        </div>
        <div className="overflow-x-auto bg-gray-200 p-6 mt-8 shadow-md">
          <table className="table table-zebra w-full">
            {/* head */}
            <thead className="bg-third text-white text-md">
              <tr>
                <th>#</th>
                <th>Contest Photo</th>
                <th>Contest Name</th>
                <th>Creator Name</th>

                <th>Paid Status</th>
                <th>Attempt Status</th>
                <th>Contest Deadline</th>
              </tr>
            </thead>
            <tbody>
              {sortedItems.map((contest, index) => (
                <tr key={contest._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="rounded w-16 h-16">
                        <img
                          src={contest.contestImage}
                          alt={contest.contestName}
                        />
                      </div>
                    </div>
                  </td>
                  <td>{contest.contestName}</td>
                  <td>{contest.creatorName}</td>

                  <td>{contest.paid}</td>
                  <td>{contest.role}</td>
                  <td className="text-red-600 font-semibold">
                    {contest.deadline}
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
