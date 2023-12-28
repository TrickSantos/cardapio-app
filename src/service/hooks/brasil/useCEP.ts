import { useQuery } from '@tanstack/react-query'
import service from '@service/requests/brasil'
import { WEEK } from '@utils/constants'

export default function useCEP(cep: string) {
  return useQuery({
    queryKey: ['cep', cep],
    queryFn: () => service.getCEP(cep),
    staleTime: 1 * WEEK,
    enabled: false,
  })
}
