import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Illustration } from './Illustration'
import { IconContainer, OrderInfoCard, SuccessContainer } from './style'

export function Success() {
  return (
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
              Enterga em <b>Rua João Daniel Martinelli, 102</b> Farrapos - Porto
              Alegre, RS
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
              <b>Cartão de Crédito</b>
            </div>
          </div>
        </OrderInfoCard>
        <Illustration />
      </div>
    </SuccessContainer>
  )
}
