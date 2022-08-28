import { createContext, ReactNode, useReducer } from 'react'
import { CartItem } from '../interfaces/CartItem'
import { actionTypes } from '../reducers/CartReducer/actionTypes'
import { cartItemsReducer } from '../reducers/CartReducer/cartItem'

interface CartContextItems {
  items: CartItem[]
  addItemToCart: (cartItem: CartItem) => void
  incrementItemQuantity: (id: number) => void
  decrementItemQuantity: (id: number) => void
  removeItemFromCart: (id: number) => void
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

  function incrementItemQuantity(coffeeId: number) {
    dispach({ type: actionTypes.INCREMENT_QUANTITY, payload: coffeeId })
  }

  function decrementItemQuantity(coffeeId: number) {
    dispach({ type: actionTypes.DECREMENT_QUANTITY, payload: coffeeId })
  }

  function removeItemFromCart(coffeeId: number) {
    dispach({ type: actionTypes.REMOVE_ITEM_FROM_CART, payload: coffeeId })
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
