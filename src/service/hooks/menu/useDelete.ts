import { useMutation, useQueryClient } from '@tanstack/react-query'
import { message } from 'antd'
import service from '@service/requests/menu'

function useDeleteMenu() {
  const { delete: deleteMenu } = service
  const queryClient = useQueryClient()

  return useMutation(deleteMenu, {
    onSuccess: () => {
      message.success('Cardapio apagado com sucesso!')
      queryClient.invalidateQueries(['menus'])
      queryClient.invalidateQueries(['menu'])
    },
  })
}

export default useDeleteMenu
