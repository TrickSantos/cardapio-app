/// <reference types="vite/client" />

type Organization = {
  id: string
  name: string
  logo: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

type Place = {
  id: string
  organizationId: string
  name: string
  address: string
  city: string
  state: string
  zip: string
  phone: string
  website: string
  isActive: boolean
  createdAt: string
  updatedAt: string
}

type Product = {
  id: string
  name: string
  description: string
  placeId: string
  isActive: boolean
  price: Price
  priceHistory: Price[]
  categories: Category[]
  photos: string[]
  createdAt: Date
  updatedAt: Date
}

type Category = {
  id: string
  placeId: string
  name: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

type Price = {
  id: string
  productId: string
  value: number
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

type Section = {
  id: string
  menuId: string
  categoryId: string
  name: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}

type Menu = {
  id: string
  placeId: string
  name: string
  description: string
  isActive: boolean
  createdAt: Date
  updatedAt: Date
  sections: Section[]
}

type UF = {
  id: number
  sigla: string
  nome: string
  regiao: Regiao
}

type Regiao = {
  id: number
  sigla: string
  nome: string
}

type Cidade = {
  nome: string
  codigo_ibge: string
}

type CEP = {
  cep: string
  state: string
  city: string
  neighborhood: string
  street: string
  service: string
  location: {
    type: string
    coordinates: {
      longitude: string
      latitude: string
    }
  }
}
