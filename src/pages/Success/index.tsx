import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Link, useLocation } from 'react-router-dom'
import { OrderInformations } from '../../interfaces/OrderInformations'
import { Illustration } from './Illustration'
import {
  IconContainer,
  OrderInfoCard,
  SuccessContainer,
  WithoutOrderContainer,
} from './style'

export function Success() {
  const { state } = useLocation()
  const order: OrderInformations = state as OrderInformations
  const isStateEmpty = !state

  if (!isStateEmpty) {
    console.table(order)
  }

  return !isStateEmpty ? (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>
      <div>
        <OrderInfoCard>
          <div className="info">
            <IconContainer IconColor="purple-neutral">
              <MapPin weight="fill" />
            </IconContainer>
            <span>
              Enterga em{' '}
              <b>
                {order.customerAddress.streetName},{' '}
                {order.customerAddress.number}
              </b>
              <br />
              {order.customerAddress.district} - {order.customerAddress.city},{' '}
              {order.customerAddress.state.toUpperCase()}
            </span>
          </div>
          <div className="info">
            <IconContainer IconColor="yellow-neutral">
              <Timer weight="fill" />
            </IconContainer>
            <div>
              <span>Previsão de entrega</span>
              <br />
              <b>20 min - 30 min</b>
            </div>
          </div>
          <div className="info">
            <IconContainer IconColor="yellow-dark">
              <CurrencyDollar />
            </IconContainer>
            <div>
              <span>Pagamento na entrega</span>
              <br />
              <b>
                {order.formOfPayment === 'credit-card' && 'Cartão de Crédito'}
                {order.formOfPayment === 'debit-card' && 'Cartão de Débito'}
                {order.formOfPayment === 'money' && 'Dinheiro'}
              </b>
            </div>
          </div>
        </OrderInfoCard>
        <Illustration />
      </div>
    </SuccessContainer>
  ) : (
    <WithoutOrderContainer>
      <h1>Ops... Algo inesperado aconteceu!</h1>
      <p>
        Verificamos que você ainda não tem nenhum pedido, clique para{' '}
        <Link to={'/'}>voltar a página inicial</Link> ou{' '}
        <Link to={'/checkout'}>ir para o carrinho</Link>
      </p>
    </WithoutOrderContainer>
  )
}
