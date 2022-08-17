import { Trash } from 'phosphor-react'
import { Counter } from '../Counter'
import { Actions, Card } from './style'

export function CoffeeCardCart() {
  return (
    <Card>
      <img src="/src/assets/coffee/Café com Leite.svg" alt="" />
      <div className="details">
        <span className="name">Expresso Tradicional</span>
        <Actions>
          <Counter />
          <button className="remove">
            <Trash weight="regular" />
            <span>REMOVER</span>
          </button>
        </Actions>
      </div>
      <strong className="price">R$ 9,90</strong>
    </Card>
  )
}
