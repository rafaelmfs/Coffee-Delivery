import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { Logo } from './Logo'
import { Actions, CartContainer, HeaderContainer, Location } from './style'

export function Header() {
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
            <div className="counter">
              <span>3</span>
            </div>
          </CartContainer>
        </NavLink>
      </Actions>
    </HeaderContainer>
  )
}
