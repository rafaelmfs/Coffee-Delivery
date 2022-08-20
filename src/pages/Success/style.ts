import styled from 'styled-components'
import { ICONS_COLORS } from '../../@types/IconColors'

export const SuccessContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding: 40px 0;

  > h1 {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 32px;
    font-weight: 800;
    line-height: 130%;
  }

  > p {
    font-size: 20px;
    line-height: 130%;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 40px;
  }

  > div {
    display: flex;
    justify-content: space-between;
  }
`
export const OrderInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 526px;
  height: 270px;
  padding: 40px;
  gap: 32px;

  position: relative;
  background: ${(props) => props.theme.background};

  /* border: 1px solid; */
  /* border-image-slice: 1; */
  /* border-image-source:  */
  border-radius: 6px 36px;

  div.info {
    display: flex;
    align-items: center;
    gap: 12px;

    font-size: 1rem;
    line-height: 130%;
  }
  div.info span {
    max-width: 310px;
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
