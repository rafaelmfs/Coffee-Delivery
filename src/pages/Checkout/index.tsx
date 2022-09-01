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
import { FormProvider, useForm } from 'react-hook-form'
import { CustomerInformation } from '../../interfaces/CustomerInformations'
import { OrderInformations } from '../../interfaces/OrderInformations'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'

export function Checkout() {
  const cartContext = useContext(CartContext)
  const { items, setEmptyCart } = cartContext
  const customerInformationForm = useForm<CustomerInformation>()
  const { register, handleSubmit } = customerInformationForm
  const navigate = useNavigate()

  const valueItems = items.reduce((total, item) => {
    return (total += item.coffee.price * item.numberOfItems)
  }, 0)
  const valueDelivery = items.length === 0 ? 0 : 3
  const valueTotal = valueItems + valueDelivery

  function onsubmitHandle(event: CustomerInformation) {
    const newOrder: OrderInformations = {
      ...event,
      valueDelivery,
      valueItems,
      valueTotal,
      items,
      id: uuidv4(),
      data: new Date().toLocaleString('pt-BR'),
    }
    setEmptyCart()
    navigate('/checkout/success', { state: newOrder })
  }

  return (
    <CheckoutContainer>
      <FormProvider {...customerInformationForm}>
        <form onSubmit={handleSubmit(onsubmitHandle)}>
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
                      value="credit-card"
                      hidden
                      {...register('formOfPayment')}
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
                      value="debit-card"
                      hidden
                      {...register('formOfPayment')}
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
                      value="money"
                      hidden
                      {...register('formOfPayment')}
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
            <CardDefault radius="true">
              <CoffeeCard>
                <ul>
                  {items.length === 0 ? (
                    <strong className="emptyCart">
                      Seu carrinho está vazio!
                    </strong>
                  ) : (
                    items.map((coffee) => (
                      <li key={coffee.id}>
                        <CoffeeCardCart
                          numberOfItems={coffee.numberOfItems}
                          coffee={coffee.coffee}
                          id={coffee.id}
                        />
                      </li>
                    ))
                  )}
                </ul>
                <ValuesWrapper>
                  <div>
                    <span className="total-title">Total de itens</span>
                    <span>
                      R$ {String(valueItems.toFixed(2)).replace('.', ',')}
                    </span>
                    {/* <span>R$ 20,00</span> */}
                  </div>
                  <div>
                    <span className="total-title">Entrega</span>
                    <span className="value">
                      R$ {String(valueDelivery.toFixed(2)).replace('.', ',')}
                    </span>
                  </div>
                  <div>
                    <span>Total</span>
                    <span className="value">
                      R$ {String(valueTotal.toFixed(2)).replace('.', ',')}
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
      </FormProvider>
    </CheckoutContainer>
  )
}
