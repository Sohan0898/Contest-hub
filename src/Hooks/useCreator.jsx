import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCreator = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isCreator, isPending: isCreatorLoading } = useQuery({
    queryKey: [user?.email, "isCreator"],
    enabled: !loading,
    queryFn: async () => {
      console.log("asking or checking is Creator", user);
      const res = await axiosSecure.get(`/users/creator/${user.email}`);
      console.log(res.data);
      return res.data?.creator;
    },
  });
  return [isCreator, isCreatorLoading];
};

export default useCreator;
