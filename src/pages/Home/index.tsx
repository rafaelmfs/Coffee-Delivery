import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CoffeeMenu } from './Components/CoffeeMenu'
import { Illustration } from './Components/Illustration'
import { HomeContainer, Icon, Intro, Items } from './style'

export function Home() {
  return (
    <HomeContainer>
      <Intro>
        <section>
          <h2>Encontre o café perfeito para qualquer hora do dia</h2>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <Items>
            <div>
              <Icon color="yellow-dark">
                <ShoppingCart weight="fill" />
              </Icon>
              <span>Compra simples e segura</span>
            </div>
            <div>
              <Icon color="base-text">
                <Package weight="fill" />
              </Icon>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Icon color="yellow-neutral">
                <Timer weight="fill" />
              </Icon>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <Icon color="purple-neutral">
                <Coffee weight="fill" />
              </Icon>
              <span>O café chega fresquinho até você</span>
            </div>
          </Items>
        </section>
        <Illustration />
      </Intro>
      <CoffeeMenu />
    </HomeContainer>
  )
}
