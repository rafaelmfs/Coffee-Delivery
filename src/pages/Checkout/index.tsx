import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { AddressForm } from '../../components/AddressForm'
import { CoffeeCardCart } from '../../components/CoffeeCardCart'
import {
  CardDefault,
  CheckoutContainer,
  CoffeeCard,
  FormHeadder,
  FormWrapper,
  PaymentForm,
  PaymentFormButton,
} from './style'

export function Checkout() {
  return (
    <CheckoutContainer>
      <section>
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
      </section>
      <section>
        <h2 className="title">Cafés selecionados</h2>
        <CardDefault radius>
          <CoffeeCard>
            <ul>
              <li>
                <CoffeeCardCart />
              </li>
            </ul>
            <div>
              <div>
                <span>Total de itens</span>
                <span>R$ 29,70</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </div>
              <div>
                <span>Total</span>
                <span>R$ 33,20</span>
              </div>
            </div>

            <button>CONFIRMAR PEDIDO</button>
          </CoffeeCard>
        </CardDefault>
      </section>
    </CheckoutContainer>
  )
}
