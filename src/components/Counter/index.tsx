import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './style'

interface CounterProps {
  amount: number
  incrementAmount: () => void
  decrementAmount: () => void
}

export function Counter({
  amount,
  incrementAmount,
  decrementAmount,
}: CounterProps) {
  return (
    <CounterContainer>
      <button title="Mais 1" onClick={incrementAmount}>
        <Plus weight="bold" />
      </button>
      <span>{amount}</span>
      <button title="Menos 1" onClick={decrementAmount}>
        <Minus weight="bold" />
      </button>
    </CounterContainer>
  )
}
