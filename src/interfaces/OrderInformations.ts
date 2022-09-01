import { CartItem } from './CartItem'
import { CustomerInformation } from './CustomerInformations'

export interface OrderInformations extends CustomerInformation {
  valueItems: number
  valueDelivery: number
  valueTotal: number
  items: CartItem[]
  id: string
  data: Date | string
}
