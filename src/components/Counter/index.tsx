import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './style'

export function Counter() {
  return (
    <CounterContainer>
      <button title="Mais 1">
        <Plus weight="bold" />
      </button>
      <span>1</span>
      <button title="Menos 1">
        <Minus weight="bold" />
      </button>
    </CounterContainer>
  )
}
