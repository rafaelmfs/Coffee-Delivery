import { MapPin, ShoppingCart } from 'phosphor-react'
import { defaultTheme } from '../../styles/themes/default'
import { Logo } from './Logo'
import { Actions, CartContainer, HeaderContainer, Location } from './style'

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <Actions>
        <Location>
          <MapPin weight="fill" color={defaultTheme['purple-neutral']} />
          <span>Porto Alegre, RS</span>
        </Location>
        <CartContainer>
          <ShoppingCart weight="fill" color={defaultTheme['yellow-dark']} />
        </CartContainer>
      </Actions>
    </HeaderContainer>
  )
}
