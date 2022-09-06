import styled, { css } from 'styled-components'
import { ICONS_COLORS } from '../../@types/IconColors'

export const CheckoutContainer = styled.main`
  padding: 2.5rem 10%;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 1.75rem;
    width: 100%;
  }

  form > div {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .title {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  @media (min-width: 900px) {
    form {
      flex-direction: row;
    }
    .order-info {
      width: calc(60% - 1.75rem);
    }
  } ;
`

interface CardDefaultOptions {
  radius?: string | boolean
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
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 0.75rem;
`

export const ErrorMessage = styled.div`
  display: flex;
  align-items: start;
  color: #f00;
  font-size: 0.875rem;
  font-style: italic;
`

export const PaymentForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  input:checked + label {
    border: 1px solid ${(props) => props.theme['purple-neutral']};
    background: ${(props) => props.theme['purple-light']};
  }

  label.invalid {
    border: 1px solid red;
  }

  div {
    width: 100%;
    padding: 4px 0;
  }

  @media (min-width: 600px) {
    flex-direction: row;
    flex: 1;
  }
`
export const PaymentFormButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 0.5rem;
  flex: 1;
  height: 3.19rem;
  border-radius: 6px;
  padding: 1rem 0.5rem;
  gap: 0.5rem;
  background: ${(props) => props.theme['base-button']};
  border: 1px solid ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  line-height: 160%;
  font-weight: 400;
  transition: 200ms;

  :hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};
    cursor: pointer;
  }

  svg {
    color: ${(props) => props.theme['purple-neutral']};
    font-size: 1rem;
  }

  @media (min-width: 1300px) {
    width: 11rem;
  }
`

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ul {
    list-style: none;
    max-height: 20rem;
    overflow: auto;
  }

  .emptyCart {
    font-family: 'Baloo 2';
    font-size: 20px;
  }

  li:first-child {
    padding-top: 0;
    padding-bottom: 1.5rem;
  }
  li {
    padding: 1.5rem 0;
    border-bottom: 1px solid ${(props) => props.theme['base-button']};
  }

  button.button-confirm {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem 0.5rem;

    width: 100%;
    height: 2.875rem;
    border-radius: 6px;
    background: ${(props) => props.theme['yellow-neutral']};
    color: ${(props) => props.theme.white};
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;
    transition: 200ms;

    :not(:disabled):hover {
      background: ${(props) => props.theme['yellow-dark']};
      cursor: pointer;
    }

    :disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`

export const ValuesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: ${(props) => props.theme['base-text']};

  div {
    display: flex;
    justify-content: space-between;

    .total-title {
      font-size: 0.875rem;
      line-height: 130%;
    }

    .values {
      font-size: 1rem;
      line-height: 130%;
    }
  }
  div:last-child {
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
