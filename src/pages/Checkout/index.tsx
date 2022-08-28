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
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Checkout() {
  const cartContext = useContext(CartContext)
  const { items } = cartContext

  const totalItemsValue = items.reduce((total, item) => {
    return (total += item.coffee.price * item.numberOfItems)
  }, 0)
  const deliveryValue = items.length === 0 ? 0 : 3
  const totalValue = totalItemsValue + deliveryValue

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
                {items.length === 0 ? (
                  <strong className="emptyCart">
                    Seu carrinho está vazio!
                  </strong>
                ) : (
                  items.map((coffee) => (
                    <li key={coffee.coffee.id}>
                      <CoffeeCardCart
                        numberOfItems={coffee.numberOfItems}
                        coffee={coffee.coffee}
                      />
                    </li>
                  ))
                )}
              </ul>
              <ValuesWrapper>
                <div>
                  <span className="total-title">Total de itens</span>
                  <span>
                    R$ {String(totalItemsValue.toFixed(2)).replace('.', ',')}
                  </span>
                  {/* <span>R$ 20,00</span> */}
                </div>
                <div>
                  <span className="total-title">Entrega</span>
                  <span className="value">
                    R$ {String(deliveryValue.toFixed(2)).replace('.', ',')}
                  </span>
                </div>
                <div>
                  <span>Total</span>
                  <span className="value">
                    R$ {String(totalValue.toFixed(2)).replace('.', ',')}
                  </span>
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
