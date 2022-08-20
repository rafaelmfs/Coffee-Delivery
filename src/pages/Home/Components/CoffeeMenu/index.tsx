import { useEffect, useState } from 'react'
import { CoffeeCardCatalog } from '../../../../components/CoffeeCardCatalog'
import { Coffee } from '../../../../interfaces/Coffee'
import { CoffeeContainer, CoffeeList, FilterList } from './style'

export function CoffeeMenu() {
  const [items, setItems] = useState<Coffee[]>([])
  // const [filter, setFilter] = useState<Tags | null>()

  useEffect(() => {
    async function getItems() {
      const response = await fetch('http://localhost:3000/coffee')
      const coffeItems: Coffee[] = await response.json()
      setItems(coffeItems)
    }

    getItems()
  }, [])

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
        {items.map((coffee) => (
          <CoffeeCardCatalog key={coffee.id} coffeeItem={coffee} />
        ))}
      </CoffeeList>
    </CoffeeContainer>
  )
}
