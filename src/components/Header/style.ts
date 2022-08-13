import styled from 'styled-components'

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  height: 104px;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  height: 38px;
`

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;

  padding: 8px;
  border-radius: 6px;

  background: ${(props) => props.theme['yellow-light']};
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 146px;
  border-radius: 6px;
  padding: 8px;
  gap: 4px;

  color: ${(props) => props.theme['purple-dark']};
  background: ${(props) => props.theme['purple-light']};
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`
