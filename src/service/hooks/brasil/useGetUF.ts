import { useQuery } from '@tanstack/react-query'
import service from '@service/requests/brasil'
import { MONTH } from '@utils/constants'

const useGetUF = () => {
  return useQuery({
    queryKey: ['ufs'],
    queryFn: () => service.getStates(),
    staleTime: 1 * MONTH,
  })
}

export default useGetUF
