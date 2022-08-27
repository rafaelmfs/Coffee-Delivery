import { Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { CartItem } from '../../interfaces/CartItem'
import { Counter } from '../Counter'
import { Actions, Card } from './style'

export function CoffeeCardCart({ item, numberOfItems }: CartItem) {
  const [quantity, setQuantity] = useState(numberOfItems)
  const cartContext = useContext(CartContext)
  const { dispach } = cartContext

  function handleIncrementQuantity() {
    setQuantity((state) => state + 1)
  }
  function handleDecrementQuantity() {
    quantity > 1 && setQuantity((state) => state - 1)
  }

  function handleRemoveButton() {
    dispach({ type: 'removeItem', payload: item.id })
  }

  const price = item.price * quantity

  return (
    <Card>
      <img src={item.image} alt="" />
      <div className="details">
        <span className="name">{item.name}</span>
        <Actions>
          <Counter
            quantity={quantity}
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
