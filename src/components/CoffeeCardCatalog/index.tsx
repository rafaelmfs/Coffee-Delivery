import { ShoppingCart } from 'phosphor-react'
import { Coffee } from '../../interfaces/Coffee'
import { Counter } from '../Counter'
import { Card } from './style'

interface CoffeeCardCatalogProps {
  coffeeItem: Coffee
}

export function CoffeeCardCatalog({ coffeeItem }: CoffeeCardCatalogProps) {
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
          <Counter />
          <button title="Adicionar ao carrinho" className="cart">
            <ShoppingCart weight="fill" />
          </button>
        </div>
      </div>
    </Card>
  )
}
