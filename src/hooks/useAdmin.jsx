import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

function useAdmin() {
  const axiosSecure = useAxiosPublic();
  const { user } = useContext(AuthContext);
  console.log(user)

  const { data: isAdmin, isPending, isLoading, isError } = useQuery({
    queryKey: [user?.email, "isAdmin"],
     // Query only runs if user.email exists
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      console.log(res.data);
      return res.data.admin;
    },
  });

  return [isAdmin,isPending, isLoading, isError];
}

export default useAdmin;