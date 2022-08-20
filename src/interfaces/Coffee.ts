import { Tag } from './Tag'

export interface Coffee {
  name: string
  description: string
  tags: Tag[]
  image: string
  price: number
  id: number
}
