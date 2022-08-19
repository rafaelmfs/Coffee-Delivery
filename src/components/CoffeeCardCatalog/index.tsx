import { ShoppingCart } from 'phosphor-react'
import { Counter } from '../Counter'
import { Card } from './style'

export function CoffeeCardCatalog() {
  return (
    <Card>
      <img src="/src/assets/coffee/Americano.svg" alt="" />
      <div className="tags">
        <span className="tag">Tradicional</span>
      </div>
      <strong className="name">Expresso Tradicional</strong>
      <p className="description">
        O tradicional café feito com água quente e grãos moídos
      </p>
      <div className="buy-area">
        <span>
          R$ <strong className="price">9.90</strong>
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
