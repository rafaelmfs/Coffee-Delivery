import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Illustration } from './Components/Illustration'
import { CoffeeCard } from './Components/CoffeeCard'
import {
  CoffeeContainer,
  CoffeeList,
  FilterList,
  HomeContainer,
  Icon,
  Intro,
  Items,
} from './style'

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
              <span>Compra simles e segura</span>
            </div>
            <div>
              <Icon color="gray">
                <Package weight="fill" />
              </Icon>
              <span>Embalagem mantém o café intacto</span>
            </div>
            <div>
              <Icon color="yellow">
                <Timer weight="fill" />
              </Icon>
              <span>Entrega rápida e rastreada</span>
            </div>
            <div>
              <Icon>
                <Coffee weight="fill" />
              </Icon>
              <span>O café chega fresquinho até você</span>
            </div>
          </Items>
        </section>
        <Illustration />
      </Intro>
      <CoffeeContainer>
        <div>
          <h2>Nossos cafés</h2>
          <FilterList>
            <ul>
              <li>
                <span>TRADICIONAL</span>
              </li>
              <li>
                <span>ESPECIAL</span>
              </li>
              <li>
                <span>COM LEITE</span>
              </li>
              <li>
                <span>ALCOÓLICO</span>
              </li>
              <li>
                <span>GELADO</span>
              </li>
            </ul>
          </FilterList>
        </div>
        <CoffeeList>
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </CoffeeList>
      </CoffeeContainer>
    </HomeContainer>
  )
}
