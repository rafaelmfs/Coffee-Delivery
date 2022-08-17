import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  width: 368px;
  height: 80px;
  padding: 8px 4px;

  background: ${(props) => props.theme['base-card']};

  .details {
    width: 171px;
    height: 61px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 8px;
  }

  span.name {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 16px;
    font-weight: 400;
    line-height: 130%;
  }

  strong {
    font-size: 16px;
    line-height: 130%;
    font-weight: 700;
  }

  img {
    width: 64px;
    height: auto;
  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  button.remove {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    width: 91px;
    height: 2.375rem;
    border-radius: 8px;
    background: ${(props) => props.theme['base-button']};
    color: ${(props) => props.theme['base-text']};
    font-size: 12px;
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
