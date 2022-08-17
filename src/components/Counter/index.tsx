import { Minus, Plus } from 'phosphor-react'
import { CounterContainer } from './style'

export function Counter() {
  return (
    <CounterContainer>
      <button>
        <Plus weight="bold" />
      </button>
      <span>1</span>
      <button>
        <Minus weight="bold" />
      </button>
    </CounterContainer>
  )
}
