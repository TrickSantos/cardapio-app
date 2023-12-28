import api from '@service/api'

export type CreatePlace = {
  organizationId: string
  name: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
  website?: string
}

class PlaceService {
  async listAll() {
    return await api.get<Place[]>('/places')
  }

  async getPlace(id: string) {
    return await api.get<Place>(`/places/${id}`)
  }

  async create(place: CreatePlace) {
    return await api.post('/places', place)
  }

  async update(place: Partial<CreatePlace> & { id: string }) {
    return await api.put(`/places/${place.id}`, place)
  }
}

export default new PlaceService()
