import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './style'

interface CounterProps {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}

export function Counter({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: CounterProps) {
  return (
    <CounterContainer>
      <button title="Mais 1" onClick={incrementQuantity}>
        <Plus weight="bold" />
      </button>
      <span>{quantity}</span>
      <button title="Menos 1" onClick={decrementQuantity}>
        <Minus weight="bold" />
      </button>
    </CounterContainer>
  )
}
