import api from '@service/api'

export type ListAllCategoriesQuery = {
  isActive?: boolean
}

const baseUrl = 'https://brasilapi.com.br/api'

class BrasilService {
  async getStates() {
    return await api.get<UF[]>(`${baseUrl}/ibge/uf/v1`).then((res) => res.data)
  }

  async listCitiesByUF(uf: string) {
    const url = `${baseUrl}/ibge/municipios/v1/${uf}`

    return await api.get<Cidade[]>(url).then((res) => res.data)
  }

  async getCEP(cep: string) {
    const url = `${baseUrl}/cep/v1/${cep}`

    return await api.get<CEP>(url).then((res) => res.data)
  }
}

export default new BrasilService()
