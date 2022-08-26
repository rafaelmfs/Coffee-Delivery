import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { Logo } from './Logo'
import { Actions, CartContainer, HeaderContainer, Location } from './style'

export function Header() {
  const cartContext = useContext(CartContext)
  const { items } = cartContext

  console.log(items.length)

  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <Logo />
      </NavLink>
      <Actions>
        <Location>
          <MapPin weight="fill" />
          <span>Porto Alegre, RS</span>
        </Location>
        <NavLink to={'/checkout'}>
          <CartContainer title="Ir para o carrinho">
            <ShoppingCart weight="fill" />
            {items.length >= 1 && (
              <div className="counter">
                <span>{items.length}</span>
              </div>
            )}
          </CartContainer>
        </NavLink>
      </Actions>
    </HeaderContainer>
  )
}
