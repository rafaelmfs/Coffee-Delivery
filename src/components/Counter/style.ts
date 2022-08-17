import styled from 'styled-components'

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 2.375rem;
  height: auto;
  width: 4.5rem;
  background: ${(props) => props.theme['base-button']};
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 8px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    color: ${(props) => props.theme['purple-neutral']};
  }
  button:hover {
    color: ${(props) => props.theme['purple-dark']};
    cursor: pointer;
  }
`
