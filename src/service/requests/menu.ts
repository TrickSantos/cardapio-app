import api from '@service/api'

export type CreateMenuProps = {
  placeId: string
  name: string
  description: string
  isActive: boolean
  sections: {
    categoryId: string
    name: string
  }[]
}

export type ListAllMenusQuery = {
  isActive?: boolean
}

class MenusService {
  async listAll() {
    return await api.get<Menu[]>('/menus').then((res) => res.data)
  }

  async listByPlaceId(placeId: string, query?: ListAllMenusQuery) {
    const params = new URLSearchParams(query as any)
    const url = `/places/${placeId}/menus?${params.toString()}`

    return await api.get<Menu[]>(url).then((res) => res.data)
  }

  async create(menu: CreateMenuProps) {
    return await api.post('/menus', menu)
  }

  async update(menu: Partial<CreateMenuProps> & { id: string }) {
    return await api.put(`/menus/${menu.id}`, menu)
  }

  async delete(id: string) {
    return await api.delete(`/menus/${id}`)
  }
}

export default new MenusService()
