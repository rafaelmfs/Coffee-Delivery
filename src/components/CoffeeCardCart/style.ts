import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 23rem;
  height: 5rem;
  padding: 0.5rem 0.25rem;

  background: ${(props) => props.theme['base-card']};

  .details {
    width: 10.7rem;
    height: 3.82rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 0.5rem;
  }

  span.name {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;
  }

  strong {
    font-size: 1rem;
    line-height: 130%;
    font-weight: 700;
  }

  img {
    width: 4rem;
    height: auto;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  button.remove {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    width: 5.7rem;
    height: 2.375rem;
    border-radius: 8px;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    font-size: 0.75rem;
    line-height: 160%;
    transition: 200ms;

    svg {
      color: ${(props) => props.theme['purple-neutral']};
    }
  }

  button.remove:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
    cursor: pointer;
    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
