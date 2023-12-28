import service, { CreatePlace } from '@service/requests/places'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useSnackbar } from 'notistack'

type MethodType = 'create' | 'update'

type MutateProps = {
  data: CreatePlace
  type: MethodType
  id?: string
}

function useMutatePlace() {
  const { create, update } = service
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  const handle = async ({ data, type, id }: MutateProps) => {
    switch (type) {
      case 'create':
        return await create(data)
      case 'update':
        return await update({
          ...data,
          id: id as string,
        })
      default:
        break
    }
  }

  return useMutation(handle, {
    onSuccess: () => {
      enqueueSnackbar('Estabelecimento salvo com sucesso!', {
        variant: 'success',
      })
      queryClient.invalidateQueries(['placesOrgs'])
    },
  })
}

export default useMutatePlace
