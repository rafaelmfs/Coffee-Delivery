import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { AddressForm } from './components/AddressForm'
import { CoffeeCardCart } from '../../components/CoffeeCardCart'
import {
  CardDefault,
  CheckoutContainer,
  CoffeeCard,
  FormHeadder,
  FormWrapper,
  PaymentForm,
  PaymentFormButton,
  ValuesWrapper,
} from './style'

export function Checkout() {
  function onsubmitHandle(event: any) {
    event.preventDefault()
    console.log(event.target.value)
  }

  return (
    <CheckoutContainer>
      <form onSubmit={onsubmitHandle}>
        <div className="order-info">
          <h2 className="title">Complete seu pedido</h2>
          <FormWrapper>
            <CardDefault>
              <FormHeadder iconColor="yellow-dark">
                <MapPinLine weight="regular" />
                <div>
                  <h3>Endereço de Entrega</h3>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </FormHeadder>
              <AddressForm />
            </CardDefault>

            <CardDefault>
              <FormHeadder iconColor="purple-neutral">
                <CurrencyDollar weight="regular" />
                <div>
                  <h3>Pagamento</h3>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </FormHeadder>
              <PaymentForm>
                <div>
                  <input
                    type="radio"
                    id="credit-card"
                    name="payment-form"
                    value="credit-card"
                    hidden
                  />
                  <PaymentFormButton htmlFor="credit-card">
                    <CreditCard weight="regular" />
                    <span>CARTÃO DE CRÉDITO</span>
                  </PaymentFormButton>
                </div>
                <div>
                  <input
                    type="radio"
                    id="debit-card"
                    name="payment-form"
                    value="debit-card"
                    hidden
                  />
                  <PaymentFormButton htmlFor="debit-card">
                    <Bank weight="regular" />
                    <span>CARTÃO DE DÉBITO</span>
                  </PaymentFormButton>
                </div>
                <div>
                  <input
                    type="radio"
                    id="money"
                    name="payment-form"
                    value="money"
                    hidden
                  />
                  <PaymentFormButton htmlFor="money">
                    <Money weight="regular" />
                    <span>DINHEIRO</span>
                  </PaymentFormButton>
                </div>
              </PaymentForm>
            </CardDefault>
          </FormWrapper>
        </div>
        <div className="cart-info">
          <h2 className="title">Cafés selecionados</h2>
          <CardDefault radius={true}>
            <CoffeeCard>
              <ul>
                <li>
                  <CoffeeCardCart
                    amountCoffee={2}
                    coffeeItem={{
                      name: 'expresso tradicional',
                      description:
                        'O tradicional café feito com água quente e grãos moídos',
                      tags: [
                        {
                          name: 'tradicional',
                          id: 1,
                        },
                      ],
                      image: 'src/assets/coffee/Expresso.svg',
                      price: 9.99,
                      id: 1,
                    }}
                  />
                </li>
              </ul>
              <ValuesWrapper>
                <div>
                  <span className="total-title">Total de itens</span>
                  <span>R$ 29,70</span>
                </div>
                <div>
                  <span className="total-title">Entrega</span>
                  <span className="value">R$ 3,50</span>
                </div>
                <div>
                  <span>Total</span>
                  <span className="value">R$ 33,20</span>
                </div>
              </ValuesWrapper>

              <button className="button-confirm" type="submit">
                CONFIRMAR PEDIDO
              </button>
            </CoffeeCard>
          </CardDefault>
        </div>
      </form>
    </CheckoutContainer>
  )
}
