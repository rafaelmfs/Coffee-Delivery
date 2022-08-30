import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { CartItem } from '../../interfaces/CartItem'
import { Counter } from '../Counter'
import { Actions, Card } from './style'

export function CoffeeCardCart({ coffee, numberOfItems, id }: CartItem) {
  const cartContext = useContext(CartContext)
  const { incrementItemQuantity, decrementItemQuantity, removeItemFromCart } =
    cartContext

  function handleIncrementQuantity() {
    incrementItemQuantity(id)
  }
  function handleDecrementQuantity() {
    decrementItemQuantity(id)
  }

  function handleRemoveButton() {
    removeItemFromCart(id)
  }

  const price = coffee.price * numberOfItems

  return (
    <Card>
      <img src={coffee.image} alt="" />
      <div className="details">
        <span className="name">{coffee.name}</span>
        <Actions>
          <Counter
            quantity={numberOfItems}
            incrementQuantity={handleIncrementQuantity}
            decrementQuantity={handleDecrementQuantity}
          />
          <button className="remove" onClick={handleRemoveButton}>
            <Trash weight="regular" />
            <span>REMOVER</span>
          </button>
        </Actions>
      </div>
      <strong className="price">
        R$ {String(price.toFixed(2)).replace('.', ',')}
      </strong>
    </Card>
  )
}
