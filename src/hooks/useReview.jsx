import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"

function useReview() {
  const axiosPublic = useAxiosPublic()
  const {data : reviews = [],refetch} = useQuery({
    queryKey:['reviews'],
    queryFn: async () => {
      const res = await axiosPublic.get('/reviews')
      return res.data
    }
  })
  return [reviews,refetch]
}

export default useReview