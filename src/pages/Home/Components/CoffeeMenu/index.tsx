import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from 'react'
import { CoffeeCardCatalog } from '../../../../components/CoffeeCardCatalog'
import { Coffee } from '../../../../interfaces/Coffee'
import { Tag } from '../../../../interfaces/Tag'
import { CoffeeContainer, CoffeeList, FilterList } from './style'

const filterTypes = {
  TRADICIONAL: 'tradicional',
  ESPECIAL: 'especial',
  COM_LEITE: 'com leite',
  ALCOOLICO: 'alcoólico',
  GELADO: 'gelado',
}

export function CoffeeMenu() {
  const [items, setItems] = useState<Coffee[]>([])
  const [filterTags, setFilterTags] = useState<Tag[]>([])

  useEffect(() => {
    async function getItemsMenu() {
      const response = await fetch('http://localhost:3000/coffee')
      const coffeItems: Coffee[] = await response.json()
      setItems(coffeItems)
    }

    getItemsMenu()
  }, [])

  function handleFilter(event: InputHTMLAttributes<ChangeEvent>) {
    console.log(event)
    if (event.target.checked) {
      const filterTag: Tag = {
        name: event.target.value,
        id: event.id,
      }
      setFilterTags((state) => [...state, filterTag])
    } else {
      const newFilterList = filterTags.filter(
        (filterTag) => filterTag.id !== event.id,
      )
      setFilterTags([...newFilterList])
    }
  }

  const tagNames = filterTags.map((tag) => tag.name)
  const listFiltered = items.filter((coffee) =>
    coffee.tags.some((tag) => {
      return tagNames.includes(tag.name)
    }),
  )

  return (
    <CoffeeContainer>
      <div className="header">
        <h2>Nossos cafés</h2>
        <nav>
          <FilterList>
            <li>
              <input
                type="checkbox"
                name="traditional"
                value={filterTypes.TRADICIONAL}
                id="tag_tradicional"
                hidden
                onChange={handleFilter}
              />
              <label htmlFor="tag_tradicional">TRADICIONAL</label>
            </li>
            <li>
              <input
                type="checkbox"
                name="especial"
                value={filterTypes.ESPECIAL}
                id="tag_especial"
                hidden
                onChange={handleFilter}
              />
              <label htmlFor="tag_especial">ESPECIAL</label>
            </li>
            <li>
              <input
                type="checkbox"
                name="com_leite"
                value={filterTypes.COM_LEITE}
                id="tag_com_leite"
                hidden
                onChange={handleFilter}
              />
              <label htmlFor="tag_com_leite">COM LEITE</label>
            </li>
            <li>
              <input
                type="checkbox"
                name="alcoolico"
                value={filterTypes.ALCOOLICO}
                id="tag_alcoolico"
                hidden
                onChange={handleFilter}
              />
              <label htmlFor="tag_alcoolico">ALCOÓLICO</label>
            </li>
            <li>
              <input
                type="checkbox"
                name="gelado"
                value={filterTypes.GELADO}
                id="tag_gelado"
                hidden
                onChange={handleFilter}
              />
              <label htmlFor="tag_gelado">GELADO</label>
            </li>
          </FilterList>
        </nav>
      </div>
      <CoffeeList>
        {listFiltered.length > 0
          ? listFiltered.map((coffee) => (
              <CoffeeCardCatalog key={coffee.id} coffeeItem={coffee} />
            ))
          : items.map((coffee) => (
              <CoffeeCardCatalog key={coffee.id} coffeeItem={coffee} />
            ))}
      </CoffeeList>
    </CoffeeContainer>
  )
}
