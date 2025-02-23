import { useQuery } from "@tanstack/react-query"
import useAxiosPublic from "./useAxiosPublic"

function useBanner() {
  const axiosPublic = useAxiosPublic()
  const {data : imagesB = [],refetch} = useQuery({
    queryKey:['imagesB'],
    queryFn: async () => {
      const res = await axiosPublic.get('/imagesB')
      return res.data
    }
  })
  return [imagesB,refetch]
}

export default useBanner