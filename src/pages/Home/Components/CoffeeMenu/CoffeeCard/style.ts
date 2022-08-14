import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  width: 16rem;
  height: 20rem;
  padding: 0 1.25rem;
  background-color: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px;

  .tags {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
  }

  .tag {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.375rem 0.75rem;
    text-transform: uppercase;
    font-size: 0.625rem;
    font-weight: 700;

    border-radius: 50px;
    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
  }

  .name {
    font-family: 'baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }

  .description {
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-weight: 400;

    color: ${(props) => props.theme['base-label']};
  }

  .buy-area {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 13rem;

    margin-bottom: 0.375rem;
  }

  .price {
    font-family: 'baloo 2';
    font-size: 1.5rem;
    font-weight: bold;
  }

  .actions {
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 0.5rem;
  }

  .cart {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 2.375rem;
    height: 2.375rem;
    border-radius: 8px;

    background: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.white};
    font-size: 1.375rem;
  }

  .cart:hover {
    background: ${(props) => props.theme['purple-neutral']};
    cursor: pointer;
  }

  img {
    width: 7.5rem;
    height: auto;
    margin-top: -15%;
  }
`

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 2.375rem;
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
