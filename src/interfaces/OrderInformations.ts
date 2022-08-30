import { CartItem } from './CartItem'
import { CustomerInformation } from './CustomerInformations'

export interface OrderInformation extends CustomerInformation {
  valueItems: number
  valueDelivery: number
  valueTotal: number
  items: CartItem[]
  id: string
  data: Date
}
