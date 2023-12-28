import { useQuery } from '@tanstack/react-query'
import service from '@service/requests/organizations'

export function useGetPlacesFromOrgs(id: string) {
  return useQuery({
    queryKey: ['placesOrgs', id],
    queryFn: () => service.getPlacesFromOrganization(id),
  })
}
