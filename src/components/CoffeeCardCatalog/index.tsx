import { ShoppingCart } from 'phosphor-react'
import { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { CartContext } from '../../contexts/CartContext'
import { CartItem } from '../../interfaces/CartItem'
import { Coffee } from '../../interfaces/Coffee'
import { Counter } from '../Counter'
import { Card } from './style'

interface CoffeeCardCatalogProps {
  coffeeItem: Coffee
}

export function CoffeeCardCatalog({ coffeeItem }: CoffeeCardCatalogProps) {
  const [quantity, setQuantity] = useState(1)
  const cartContext = useContext(CartContext)
  const { addItemToCart } = cartContext

  function handleIncrementQuantity() {
    setQuantity((state) => state + 1)
  }
  function handleDecrementQuantity() {
    quantity > 1 && setQuantity((state) => state - 1)
  }

  function handleAddCart() {
    addItemToCart({
      coffee: coffeeItem,
      numberOfItems: quantity,
      id: uuidv4(),
    } as CartItem)
  }

  return (
    <Card>
      <img src={coffeeItem.image} alt="" />
      <div className="tags">
        {coffeeItem.tags.map((tag) => (
          <span className="tag" key={tag.id}>
            {tag.name}
          </span>
        ))}
      </div>
      <strong className="name">{coffeeItem.name}</strong>
      <p className="description">{coffeeItem.description}</p>
      <div className="buy-area">
        <span>
          R$ <strong className="price">{coffeeItem.price}</strong>
        </span>
        <div className="actions">
          <Counter
            quantity={quantity}
            incrementQuantity={handleIncrementQuantity}
            decrementQuantity={handleDecrementQuantity}
          />
          <button
            title="Adicionar ao carrinho"
            className="cart"
            onClick={() => handleAddCart()}
          >
            <ShoppingCart weight="fill" />
          </button>
        </div>
      </div>
    </Card>
  )
}
