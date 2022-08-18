import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { CoffeeCardCart } from '../../components/CoffeeCardCart'
import {
  AddressForm,
  CardDefault,
  CheckoutContainer,
  CoffeeCard,
  FormHeadder,
  FormWrapper,
  PaymentForm,
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
            <AddressForm>
              <input type="number" placeholder="CEP" name="zip-code" />
              <input type="text" placeholder="Rua" name="street" />
              <div>
                <input type="number" placeholder="Número" name="number" />
                <div className="complement-input">
                  <input
                    type="text"
                    placeholder="Complemento"
                    name="complement"
                  />
                  <span>Opcional</span>
                </div>
              </div>
              <div>
                <input type="text" placeholder="Bairro" name="district" />
                <input type="text" placeholder="Cidade" name="city" />
                <input
                  type="text"
                  placeholder="UF"
                  name="state"
                  className="state-input"
                />
              </div>
            </AddressForm>
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
              <form>
                <label htmlFor="credit-card">
                  <CreditCard weight="regular" />
                  <span>CARTÃO DE CRÉDITO</span>
                  <input type="radio" id="debit-card" name="payment-form" />
                </label>
                <label htmlFor="debit-card">
                  <Bank weight="regular" />
                  <span>CARTÃO DE DÉBITO</span>
                  <input type="radio" id="debit-card" name="payment-form" />
                </label>
                <label htmlFor="money">
                  <Money weight="regular" />
                  <span>DINHEIRO</span>
                  <input type="radio" id="money" name="payment-form" />
                </label>
              </form>
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
