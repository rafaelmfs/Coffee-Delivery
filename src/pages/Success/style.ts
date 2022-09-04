import styled from 'styled-components'
import { ICONS_COLORS } from '../../@types/IconColors'

const BaseContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.5rem 10%;

  > h1 {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
  }
`

export const SuccessContainer = styled(BaseContainer)`
  > p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 2.5rem;
  }

  > div {
    display: flex;
    justify-content: space-between;
  }
`
export const OrderInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 32.875rem;
  height: 16.875rem;
  padding: 2.5rem;
  gap: 2rem;

  position: relative;
  background: ${(props) => props.theme.background};
  border-radius: 6px 36px;

  div.info {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    font-size: 1rem;
    line-height: 130%;
  }
  div.info span {
    max-width: 19.375rem;
  }

  ::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      ${(props) => props.theme['yellow-neutral']},
      ${(props) => props.theme['purple-neutral']}
    );
    z-index: -1;
    margin: -1px;
    border-radius: 6px 36px;
  }
`

interface IconContainerProps {
  IconColor: keyof typeof ICONS_COLORS
}

export const WithoutOrderContainer = styled(BaseContainer)`
  align-items: center;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    text-align: center;

    margin: 1rem;
  }
`

export const IconContainer = styled.div<IconContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  font-size: 1rem;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme[props.IconColor]};
`
