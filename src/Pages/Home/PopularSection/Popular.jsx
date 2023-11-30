import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import PopularCard from "./PopularCard";
import useContest from "../../../Hooks/useContest";

const Popular = () => {
  const [approvedContests] = useContest();
//   console.log("id for ", approvedContests);
  const axiosPublic = useAxiosPublic();

  const { data: items = [] } = useQuery({
    queryKey: ["participates"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/participates`);
      console.log(res.data);
      return res.data;
    },
  });

  // Filter contests with paid status "yes"
  const paidContests = items.filter((item) => item.paid === "yes");

  const contestCounts = paidContests.reduce((counts, contest) => {
    const contestName = contest.contestName;

    counts[contestName] = (counts[contestName] || 0) + 1;
    return counts;
  }, {});

  const uniqueContests = Object.keys(contestCounts).sort(
    (a, b) => contestCounts[b] - contestCounts[a]
  );

  const top6UniqueContests = uniqueContests.slice(0, 6);

  return (
    <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-16 py-6 mt-10">

        <div><h1 className="text-3xl mt-4 font-semibold text-center "><span className="text-5xl font-bold uppercase text-secondary leading-relaxed">Bringing Dreams to Reality:</span> <br />The Contest-Hub Innovation Popular Contest </h1></div>

      <div className="grid grid-cols-1 my-16 md:grid-cols-2 lg:grid-cols-3  gap-10 ">
      
        {top6UniqueContests.map((contestName, index) => {
          // macth dupilicat contest
          const matchedContest = paidContests?.find(
            (contest) => contest?.contestName === contestName
          );

        //   console.log("paid match ", matchedContest);

          // match name for id
          const matchedApprovedContest = approvedContests?.find(
            (contest) => contest?.name === contestName
          );
        //   console.log("match for id ", matchedApprovedContest);

          return (

            

            <PopularCard
              key={index}
              contest={matchedContest}
              count={contestCounts[contestName]} // Pass the count as a prop
              approvedContestId={
                matchedApprovedContest ? matchedApprovedContest?._id : null
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
