import api from '@service/api'

export type CreateProductProps = {
  placeId: string
  name: string
  price: number
  description: string
  categories: string[]
  photos: string[]
}

class ProductService {
  async listAll() {
    return api.get<Product[]>('/products').then((res) => res.data)
  }

  async listByPlaceId(placeId: string) {
    return api.get<Product[]>(`/places/${placeId}/products`).then((res) => res.data)
  }

  async create(product: CreateProductProps) {
    return await api.post('/products', product)
  }

  async update(product: Partial<CreateProductProps> & { id: string }) {
    return await api.put(`/products/${product.id}`, product)
  }

  async delete(id: string) {
    return await api.delete(`/products/${id}`)
  }
}

export default new ProductService()
