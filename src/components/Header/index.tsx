import { MapPin, ShoppingCart } from 'phosphor-react'
import { Logo } from './Logo'
import { Actions, CartContainer, HeaderContainer, Location } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Actions>
        <Location>
          <MapPin weight="fill" />
          <span>Porto Alegre, RS</span>
        </Location>
        <CartContainer>
          <ShoppingCart weight="fill" />
        </CartContainer>
      </Actions>
    </HeaderContainer>
  )
}
