import { TbTrophyOff } from "react-icons/tb";
import { FaTrophy } from "react-icons/fa";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { useState, useMemo } from "react";
import toast from "react-hot-toast";

const ContestSubmitted = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [selectedContest, setSelectedContest] = useState(null);

  const { data: items = [], refetch } = useQuery({
    queryKey: ["participates", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/participates?email=${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  const uniqueContestNames = useMemo(() => {
    return [...new Set(items.map((item) => item.contestName))];
  }, [items]);

  // Filter and sort items based on selected contest name
  const filteredAndSortedItems = useMemo(() => {
    let filteredItems = items;
    if (selectedContest) {
      filteredItems = items.filter(
        (item) => item.contestName === selectedContest
      );
    }
    return filteredItems;
  }, [items, selectedContest]);

  //make winner

  const handleMakeWinner = (item) => {
    // if a winner has already been decided for the selected contest
    const winnerExists = items.some(
      (contest) =>
        contest.contestName === selectedContest && contest.role === "winner"
    );
    if (winnerExists) {
      toast.error(`Winner has been declared for ${selectedContest}`);
    } else {
      axiosSecure.patch(`/participates/winner/${item._id}`).then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success(`👏 ${item?.participateName} is Winner`);
        }
      });
    }
  };

  return (
    <div>
      <div>
        <div className="my-4 mt-10">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold ">
              Submitted Contest By Participate : {items.length}
            </h2>
            <div>
              <select
                className=" p-3 rounded bg-gray-100 "
                value={selectedContest || ""}
                onChange={(e) => setSelectedContest(e.target.value || null)}
              >
                <option value="">All Contests</option>
                {uniqueContestNames.map((contestName) => (
                  <option key={contestName} value={contestName}>
                    {contestName}
                  </option>
                ))}
              </select>
              <label className="text-md font-semibold text-gray-500">
                {" "}
                : Filter Your Contest
              </label>
            </div>
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
                <th>Participate Name</th>
                <th>Participate Email</th>
                <th>Status</th>
                <th>Task Submitted</th>
                <th>Make Winner</th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedItems.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="avatar">
                      <div className="rounded w-16 h-16">
                        <img src={item.contestImage} alt={item.contestName} />
                      </div>
                    </div>
                  </td>
                  <td>{item.contestName}</td>
                  <td>{item.participateName}</td>
                  <td>{item.participateEmail}</td>
                  <td>{item.role}</td>
                  <td>{item.attempt}</td>
                  <td className="">
                    {item?.role === "winner" ? (
                      <button
                        className="btn bg-transparent text-amber-500 btn-ghost tooltip tooltip-warning"
                        data-tip="Winner "
                      >
                        <FaTrophy className="text-2xl drop-shadow"></FaTrophy>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleMakeWinner(item)}
                        className="btn bg-transparent  btn-ghost tooltip tooltip-error "
                        data-tip="Make Winner"
                      >
                        <TbTrophyOff className="text-2xl text-red-400"></TbTrophyOff>
                      </button>
                    )}
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

export default ContestSubmitted;
