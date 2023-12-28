import service from '@service/requests/products'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { message } from 'antd'

function useDeleteProduct() {
  const { delete: deleteProduct } = service
  const queryClient = useQueryClient()

  return useMutation(deleteProduct, {
    onSuccess: () => {
      message.success('Produto deletado com sucesso!')
      queryClient.invalidateQueries(['products'])
    },
  })
}

export default useDeleteProduct
