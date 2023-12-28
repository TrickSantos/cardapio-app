import { useMutation, useQueryClient } from '@tanstack/react-query'
import service from '@service/requests/categories'
import { message } from 'antd'

function useDeleteCategory() {
  const { delete: deleteCategory } = service
  const queryClient = useQueryClient()

  return useMutation(deleteCategory, {
    onSuccess: () => {
      message.success('Categoria apagada com sucesso!')
      queryClient.invalidateQueries(['categories'])
    },
  })
}

export default useDeleteCategory
