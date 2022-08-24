import { Trash } from 'phosphor-react'
import { useState } from 'react'
import { Coffee } from '../../interfaces/Coffee'
import { Counter } from '../Counter'
import { Actions, Card } from './style'

interface CoffeeCardCartProps {
  amountCoffee: number
  coffeeItem: Coffee
}

export function CoffeeCardCart({
  coffeeItem,
  amountCoffee,
}: CoffeeCardCartProps) {
  const [amount, setAmount] = useState(amountCoffee)

  function handleIncrementAmount() {
    setAmount((state) => state + 1)
  }
  function handleDecrementAmount() {
    amount > 1 && setAmount((state) => state - 1)
  }

  const price = coffeeItem.price * amount

  return (
    <Card>
      <img src={coffeeItem.image} alt="" />
      <div className="details">
        <span className="name">{coffeeItem.name}</span>
        <Actions>
          <Counter
            amount={amount}
            incrementAmount={handleIncrementAmount}
            decrementAmount={handleDecrementAmount}
          />
          <button className="remove">
            <Trash weight="regular" />
            <span>REMOVER</span>
          </button>
        </Actions>
      </div>
      <strong className="price">R$ {String(price).replace('.', ',')}</strong>
    </Card>
  )
}
