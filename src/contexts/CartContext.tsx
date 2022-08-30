import { createContext, ReactNode, useReducer } from 'react'
import { CartItem } from '../interfaces/CartItem'
import { actionTypes } from '../reducers/CartReducer/actionTypes'
import { cartItemsReducer } from '../reducers/CartReducer/cartItem'

interface CartContextItems {
  items: CartItem[]
  addItemToCart: (cartItem: CartItem) => void
  incrementItemQuantity: (id: string) => void
  decrementItemQuantity: (id: string) => void
  removeItemFromCart: (id: string) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextItems)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, dispach] = useReducer(cartItemsReducer, [])

  function addItemToCart(cartItem: CartItem) {
    dispach({
      type: actionTypes.ADD_ITEM_TO_CART,
      payload: cartItem,
    })
  }

  function incrementItemQuantity(itemCartId: string) {
    dispach({ type: actionTypes.INCREMENT_QUANTITY, payload: itemCartId })
  }

  function decrementItemQuantity(itemCartId: string) {
    dispach({ type: actionTypes.DECREMENT_QUANTITY, payload: itemCartId })
  }

  function removeItemFromCart(itemCartId: string) {
    dispach({ type: actionTypes.REMOVE_ITEM_FROM_CART, payload: itemCartId })
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItemToCart,
        incrementItemQuantity,
        decrementItemQuantity,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
