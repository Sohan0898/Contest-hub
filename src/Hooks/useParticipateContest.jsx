import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useParticipateContest = () => {
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

    return [items,user,loading];
};

export default useParticipateContest;