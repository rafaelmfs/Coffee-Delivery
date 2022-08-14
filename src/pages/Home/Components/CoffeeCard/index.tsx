import { ShoppingCart } from 'phosphor-react'

export function CoffeeCard() {
  return (
    <div>
      <img src="" alt="" />
      <span className="tag"></span>
      <strong className="name"></strong>
      <p className="description"></p>
      <div className="buy-area">
        <span className="price"></span>
        <div className="actions">
          <input type="number" className="amount" />
          <button>
            <ShoppingCart />
          </button>
        </div>
      </div>
    </div>
  )
}
