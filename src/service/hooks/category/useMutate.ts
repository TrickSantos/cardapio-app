import service, { CreateCategoryProps } from '@service/requests/categories'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { message } from 'antd'

type MethodType = 'create' | 'update'

type MutateProps = {
  data: CreateCategoryProps
  type: MethodType
  id?: string
}

function useMutateCategory() {
  const { create, update } = service
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
      message.success('Categoria salva com sucesso!')
      queryClient.invalidateQueries(['categories'])
    },
  })
}

export default useMutateCategory
