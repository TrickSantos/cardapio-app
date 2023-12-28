import { useQuery } from '@tanstack/react-query'
import service from '@service/requests/brasil'
import { MONTH } from '@utils/constants'

const useGetCities = (state: string) => {
  return useQuery({
    queryKey: ['cities', state],
    queryFn: () => service.listCitiesByUF(state),
    staleTime: 1 * MONTH,
    enabled: false,
  })
}

export default useGetCities
