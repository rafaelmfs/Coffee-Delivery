import { CartItem } from '../../interfaces/CartItem'
import { actionTypes } from './actionTypes'

export function cartItemsReducer(state: CartItem[], actions: any) {
  switch (actions.type) {
    case actionTypes.ADD_ITEM_TO_CART: {
      return [...state, actions.payload]
    }
    case actionTypes.REMOVE_ITEM_FROM_CART: {
      const newList = state.filter((item) => item.id !== actions.payload)
      return [...newList]
    }
    case actionTypes.INCREMENT_QUANTITY: {
      const cartItem = state.find((item) => item.id === actions.payload)
      if (cartItem) {
        const numberOfItems = cartItem.numberOfItems + 1
        const newItem: CartItem = {
          coffee: cartItem.coffee,
          numberOfItems,
          id: cartItem.id,
        }
        const index = state.findIndex((item) => item.id === actions.payload)
        const newList = [
          ...state.slice(0, index),
          newItem,
          ...state.slice(index + 1),
        ]
        return [...newList]
      }
      return [...state]
    }
    case actionTypes.DECREMENT_QUANTITY: {
      const cartItem = state.find((item) => item.id === actions.payload)
      if (cartItem) {
        const numberOfItems =
          cartItem.numberOfItems > 1 ? cartItem.numberOfItems - 1 : 1
        const newItem: CartItem = {
          coffee: cartItem.coffee,
          numberOfItems,
          id: cartItem.id,
        }
        const index = state.findIndex((item) => item.id === actions.payload)
        const newList = [
          ...state.slice(0, index),
          newItem,
          ...state.slice(index + 1),
        ]
        return [...newList]
      }
      return [...state]
    }

    default: {
      return [...state]
    }
  }
}
