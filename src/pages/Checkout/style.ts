import styled, { css } from 'styled-components'

const ICONS_COLORS = {
  'yellow-dark': 'yellow-dark',
  'purple-neutral': 'purple-neutral',
}

interface FormHeadderProps {
  iconColor: keyof typeof ICONS_COLORS
}

interface CardDefaultOptions {
  radius?: boolean
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

export const CardDefault = styled.div<CardDefaultOptions>`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme['base-card']};

  ${(props) =>
    props.radius &&
    css`
      border-radius: 6px 44px;
    `}
`

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

export const AddressForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    height: 2.625rem;
    padding: 0.75rem;
    flex: 1;
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
    background: ${(props) => props.theme['base-input']};
  }
  input:first-child {
    max-width: 30%;
  }

  input::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    box-sizing: border-box;
    overflow: hidden;

    .state-input {
      max-width: 12%;
    }
  }
`

export const PaymentForm = styled.div``

export const CoffeeCard = styled.div``
