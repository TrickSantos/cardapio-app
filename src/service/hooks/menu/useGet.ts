import { useQuery } from '@tanstack/react-query'
import service, { ListAllMenusQuery } from '@service/requests/menu'

type UseGetMenusProps = {
  placeId?: string
  query?: ListAllMenusQuery
}

export default function useGetMenu(payload?: UseGetMenusProps) {
  const { placeId, query } = payload || {}

  if (placeId) {
    return useQuery({
      queryKey: ['menu', placeId],
      queryFn: () => service.listByPlaceId(placeId, query),
    })
  }

  return useQuery({
    queryKey: ['menus'],
    queryFn: service.listAll,
  })
}
