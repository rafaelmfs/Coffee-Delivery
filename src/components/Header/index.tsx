import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'
import { Logo } from './Logo'
import { Actions, CartContainer, HeaderContainer, Location } from './style'

export function Header() {
  const cartContext = useContext(CartContext)
  const { items } = cartContext

  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <Logo />
      </NavLink>
      <Actions>
        <Location>
          <MapPin weight="fill" />
          <span>Belo Horizonte, MG</span>
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
