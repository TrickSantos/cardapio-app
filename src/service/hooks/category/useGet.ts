import { useQuery } from '@tanstack/react-query'
import service, { ListAllCategoriesQuery } from '@service/requests/categories'

type UseGetCategoriesProps = {
  placeId?: string
  query?: ListAllCategoriesQuery
}

export default function useGetCategories(payload?: UseGetCategoriesProps) {
  const { placeId, query } = payload || {}

  if (placeId) {
    return useQuery({
      queryKey: ['categories', placeId],
      queryFn: () => service.listByPlaceId(placeId, query),
      initialData: [],
    })
  }

  return useQuery({
    queryKey: ['categories'],
    queryFn: service.listAll,
    initialData: [],
  })
}
