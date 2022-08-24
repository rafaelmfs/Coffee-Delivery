import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { Coffee } from '../../interfaces/Coffee'
import { Counter } from '../Counter'
import { Card } from './style'

interface CoffeeCardCatalogProps {
  coffeeItem: Coffee
}

export function CoffeeCardCatalog({ coffeeItem }: CoffeeCardCatalogProps) {
  const [amount, setAmount] = useState(1)

  function handleIncrementAmount() {
    setAmount((state) => state + 1)
  }
  function handleDecrementAmount() {
    amount > 1 && setAmount((state) => state - 1)
  }

  return (
    <Card>
      <img src={coffeeItem.image} alt="" />
      <div className="tags">
        {coffeeItem.tags.map((tag) => (
          <span className="tag" key={tag.id}>
            {tag.name}
          </span>
        ))}
      </div>
      <strong className="name">{coffeeItem.name}</strong>
      <p className="description">{coffeeItem.description}</p>
      <div className="buy-area">
        <span>
          R$ <strong className="price">{coffeeItem.price}</strong>
        </span>
        <div className="actions">
          <Counter
            amount={amount}
            incrementAmount={handleIncrementAmount}
            decrementAmount={handleDecrementAmount}
          />
          <button title="Adicionar ao carrinho" className="cart">
            <ShoppingCart weight="fill" />
          </button>
        </div>
      </div>
    </Card>
  )
}
