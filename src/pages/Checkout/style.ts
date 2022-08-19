import styled, { css } from 'styled-components'

const ICONS_COLORS = {
  'yellow-dark': 'yellow-dark',
  'purple-neutral': 'purple-neutral',
}

export const CheckoutContainer = styled.main`
  display: flex;
  align-items: flex-start;

  padding: 2.5rem 0;
  gap: 1.75rem;
  width: 100%;

  .title {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

interface CardDefaultOptions {
  radius?: boolean
}

export const CardDefault = styled.div<CardDefaultOptions>`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};
  width: auto;
  ${(props) =>
    props.radius &&
    css`
      border-radius: 6px 44px;
    `}
`

interface FormHeadderProps {
  iconColor: keyof typeof ICONS_COLORS
}

export const FormHeadder = styled.div<FormHeadderProps>`
  display: flex;
  align-items: flex-start;
  justify-content: baseline;

  gap: 0.5rem;

  svg {
    font-size: 1.375rem;
    color: ${(props) => props.theme[props.iconColor]};
  }

  h3 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;
    font-weight: 400;

    color: ${(props) => props.theme['base-text']};
  }

  margin-bottom: 2rem;
`

export const FormWrapper = styled.div`
  width: 40rem;

  display: flex;
  flex-direction: column;

  gap: 0.75rem;
`

export const PaymentForm = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  input:checked + label {
    border: 1px solid ${(props) => props.theme['purple-neutral']};
    background: ${(props) => props.theme['purple-light']};
  }
`

export const PaymentFormButton = styled.label`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  width: 178.67px;
  height: 51px;
  border-radius: 6px;
  padding: 16px;
  gap: 8px;
  background: ${(props) => props.theme['base-button']};
  border: 1px solid ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  font-size: 12px;
  line-height: 160%;
  font-weight: 400;

  svg {
    color: ${(props) => props.theme['purple-neutral']};
    font-size: 1rem;
  }
`

export const CoffeeCard = styled.div``
