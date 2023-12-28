import service, { CreateMenuProps } from '@service/requests/menu'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { message } from 'antd'

type MethodType = 'create' | 'update'

type MutateProps = {
  data: CreateMenuProps
  type: MethodType
  id?: string
}

function useMutateMenu() {
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
      message.success('Cardápio salvo com sucesso!')
      queryClient.invalidateQueries(['menus'])
      queryClient.invalidateQueries(['menu'])
    },
  })
}

export default useMutateMenu
