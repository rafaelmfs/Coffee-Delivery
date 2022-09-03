import { CartItem } from './CartItem'

export interface OrderInformations {
  customerAddress: {
    zipCode: string
    streetName: string
    number: number
    complement?: string
    district: string
    city: string
    state: string
  }
  formOfPayment: string
  valueItems: number
  valueDelivery: number
  valueTotal: number
  items: CartItem[]
  id: string
  date: Date | string
}
