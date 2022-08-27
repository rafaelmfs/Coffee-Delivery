import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 90rem; /*  1440px */
  height: 6.5rem; /* 104px */

  padding: 0 10%;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  height: 2.375rem; /* 38px */
`

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.375rem; /* 38px */

  position: relative;

  padding: 0.5rem; /* 8px */
  border-radius: 6px;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  .counter {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 20px;
    height: 20px;
    border-radius: 50%;
    font-weight: bold;
    font-size: 12px;
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};

    position: absolute;
    right: -25%;
    top: -25%;
  }
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 12rem;
  border-radius: 6px;
  padding: 0.5rem; /* 8px */
  gap: 4px;

  color: ${(props) => props.theme['purple-dark']};
  background: ${(props) => props.theme['purple-light']};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  svg {
    color: ${(props) => props.theme['purple-neutral']};
  }
`
