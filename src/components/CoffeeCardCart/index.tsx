import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { CartItem } from '../../interfaces/CartItem'
import { Counter } from '../Counter'
import { Actions, Card } from './style'

export function CoffeeCardCart({ item, numberOfItems }: CartItem) {
  const [quantity, setQuantity] = useState(numberOfItems)

  function handleIncrementQuantity() {
    setQuantity((state) => state + 1)
  }
  function handleDecrementQuantity() {
    quantity > 1 && setQuantity((state) => state - 1)
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
          <button className="remove">
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
