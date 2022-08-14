import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Card, Counter } from './style'

export function CoffeeCard() {
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
          <Counter>
            <button>
              <Plus weight="bold" />
            </button>
            <span>1</span>
            <button>
              <Minus weight="bold" />
            </button>
          </Counter>
          <button className="cart">
            <ShoppingCart weight="fill" />
          </button>
        </div>
      </div>
    </Card>
  )
}
