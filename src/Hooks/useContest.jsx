import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


 
const useContest = () => {

    const axiosPublic = useAxiosPublic();

    const { data: approvedContests = [] , isPending , refetch  } = useQuery({
        queryKey: ["contests", "approved"],
        queryFn: async () => {
          const res = await axiosPublic.get("/contests");
          const allContests = res.data;
          const approvedData = allContests.filter(
            (contest) => contest.status === "approved"
          );
    
          console.log(approvedData);
          return approvedData;
        },
      });

      return [approvedContests,isPending , refetch ]
};

export default useContest;