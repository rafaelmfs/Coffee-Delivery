import { CoffeeCard } from './CoffeeCard'
import { CoffeeContainer, CoffeeList, FilterList } from './style'

export function CoffeeMenu() {
  return (
    <CoffeeContainer>
      <div className="header">
        <h2>Nossos cafés</h2>
        <nav>
          <FilterList>
            <li>
              <button>TRADICIONAL</button>
            </li>
            <li>
              <button>ESPECIAL</button>
            </li>
            <li>
              <button>COM LEITE</button>
            </li>
            <li>
              <button>ALCOÓLICO</button>
            </li>
            <li>
              <button>GELADO</button>
            </li>
          </FilterList>
        </nav>
      </div>
      <CoffeeList>
        <CoffeeCard />
      </CoffeeList>
    </CoffeeContainer>
  )
}
