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
  setEmptyCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextItems)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, dispatch] = useReducer(cartItemsReducer, [])

  function addItemToCart(cartItem: CartItem) {
    dispatch({
      type: actionTypes.ADD_ITEM_TO_CART,
      payload: cartItem,
    })
  }

  function incrementItemQuantity(itemCartId: string) {
    dispatch({ type: actionTypes.INCREMENT_QUANTITY, payload: itemCartId })
  }

  function decrementItemQuantity(itemCartId: string) {
    dispatch({ type: actionTypes.DECREMENT_QUANTITY, payload: itemCartId })
  }

  function removeItemFromCart(itemCartId: string) {
    dispatch({ type: actionTypes.REMOVE_ITEM_FROM_CART, payload: itemCartId })
  }

  function setEmptyCart() {
    dispatch({ type: actionTypes.SET_EMPTY_CART })
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItemToCart,
        incrementItemQuantity,
        decrementItemQuantity,
        removeItemFromCart,
        setEmptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
