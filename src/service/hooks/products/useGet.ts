import { useQuery } from '@tanstack/react-query'
import service from '@service/requests/products'

export function useGetProducts(placeId?: string) {
  if (placeId)
    return useQuery({
      queryKey: ['products', placeId],
      queryFn: () => service.listByPlaceId(placeId),
    })

  return useQuery({
    queryKey: ['products'],
    queryFn: service.listAll,
  })
}
