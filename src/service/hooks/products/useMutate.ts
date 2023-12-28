import service, { CreateProductProps } from '@service/requests/products'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { message } from 'antd'

type MethodType = 'create' | 'update'

type MutateProps = {
  data: CreateProductProps
  type: MethodType
  id?: string
}

function useMutateProduct() {
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
      message.success('Produto salvo com sucesso!')
      queryClient.invalidateQueries(['products'])
    },
  })
}

export default useMutateProduct
