import { createContext, ReactNode, useEffect, useReducer } from 'react'
import { CartItem } from '../interfaces/CartItem'

interface CartContextItems {
  items: CartItem[]
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext<CartContextItems>([])

function cartItemsReducer(state: CartItem[]) {
  const item: CartItem = {
    item: {
      name: 'expresso tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      tags: [
        {
          name: 'tradicional',
          id: 1,
        },
      ],
      image: 'src/assets/coffee/Expresso.svg',
      price: 9.9,
      id: 1,
    },
    numberOfItems: 2,
  }
  return [item]
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, dispach] = useReducer(cartItemsReducer, [])
  useEffect(() => {
    dispach()
  }, [])
  return (
    <CartContext.Provider value={{ items }}>{children}</CartContext.Provider>
  )
}
