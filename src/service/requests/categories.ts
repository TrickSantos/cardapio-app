import api from '@service/api'

export type CreateCategoryProps = {
  placeId: string
  name: string
}

export type ListAllCategoriesQuery = {
  isActive?: boolean
}

class CategoriesService {
  async listAll() {
    return await api.get<Category[]>('/categories').then((res) => res.data)
  }

  async listByPlaceId(placeId: string, query?: ListAllCategoriesQuery) {
    const params = new URLSearchParams(query as any)
    const url = `/places/${placeId}/categories?${params.toString()}`

    return await api.get<Category[]>(url).then((res) => res.data)
  }

  async create(category: CreateCategoryProps) {
    return await api.post('/categories', category)
  }

  async update(category: Partial<CreateCategoryProps> & { id: string }) {
    return await api.put(`/categories/${category.id}`, category)
  }

  async delete(id: string) {
    return await api.delete(`/categories/${id}`)
  }
}

export default new CategoriesService()
