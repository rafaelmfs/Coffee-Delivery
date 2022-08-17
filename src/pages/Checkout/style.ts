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
  justify-content: space-between;

  padding: 40px 0;
  gap: 28px;
  width: 100%;

  .title {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
    margin-bottom: 15px;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CardDefault = styled.div<CardDefaultOptions>`
  display: flex;
  flex-direction: column;

  padding: 40px;
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

  gap: 8px;

  svg {
    font-size: 22px;
    color: ${(props) => props.theme[props.iconColor]};
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 14px;
    line-height: 130%;
    font-weight: 400;

    color: ${(props) => props.theme['base-text']};
  }

  margin-bottom: 32px;
`

export const FormWrapper = styled.div`
  width: 640px;
  height: 591px;

  display: flex;
  flex-direction: column;

  gap: 12px;
`

export const AddressForm = styled.form`
  .address-form-input-area {
  }
`

export const PaymentForm = styled.div``

export const CoffeeCard = styled.div``
