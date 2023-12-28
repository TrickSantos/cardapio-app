import api from '@service/api'

class OrganizationService {
  async listAll() {
    return api.get<Organization[]>('/organizations').then((res) => res.data)
  }

  async getOrganization(id: string) {
    return await api.get<Organization>(`/organizations/${id}`)
  }

  async getPlacesFromOrganization(id: string) {
    return await api.get<Place[]>(`/organizations/${id}/places`).then((res) => res.data)
  }
}

export default new OrganizationService()
