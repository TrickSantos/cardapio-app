import { useQuery } from '@tanstack/react-query'
import service from '@service/requests/organizations'

export function useGetAllOrgs() {
  return useQuery({
    queryKey: ['orgs'],
    queryFn: service.listAll,
  })
}
