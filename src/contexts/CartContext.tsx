import { createContext, ReactNode, useReducer } from 'react'
import { CartItem } from '../interfaces/CartItem'

interface CartContextItems {
  items: CartItem[]
  dispach: any
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextItems)

function cartItemsReducer(state: CartItem[], actions: any) {
  switch (actions.type) {
    case 'addItem': {
      return [...state, actions.payload]
    }
    case 'removeItem': {
      const newList = state.filter((item) => item.item.id !== actions.payload)
      return [...newList]
    }

    default: {
      return [...state]
    }
  }
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, dispach] = useReducer(cartItemsReducer, [])

  return (
    <CartContext.Provider value={{ items, dispach }}>
      {children}
    </CartContext.Provider>
  )
}
