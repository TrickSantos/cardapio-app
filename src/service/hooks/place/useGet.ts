import { useQuery } from '@tanstack/react-query'
import service from '@service/requests/places'

type UseGetMenusProps = {
  placeId: string
}

export default function useGetPlace({ placeId }: UseGetMenusProps) {
  return useQuery({
    queryKey: ['place', placeId],
    queryFn: () => service.getPlace(placeId),
  })
}
