import styled, { css } from 'styled-components'
import { ICONS_COLORS } from '../../@types/IconColors'
import background from '../../assets/Background.png'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
`

export const Intro = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 28rem; /* 544px */
  background-image: url(${background});

  section {
    max-width: 36.75rem; /* 588px */
    margin-top: -2.25rem;
  }

  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  p {
    font-family: 'Roboto';
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 1rem;
  }
`

export const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;

  width: 35rem;
  height: 5rem;
  margin-top: 4rem;

  div {
    display: flex;
    align-items: center;
  }
`

interface IconColors {
  color: keyof typeof ICONS_COLORS
}

export const Icon = styled.div<IconColors>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  margin-right: 0.625rem;

  color: ${(props) => props.theme.white};

  ${(props) =>
    props.color === ICONS_COLORS['yellow-dark']
      ? css`
          background: ${props.theme[ICONS_COLORS['yellow-dark']]};
        `
      : props.color === ICONS_COLORS['yellow-neutral']
      ? css`
          background: ${props.theme[ICONS_COLORS['yellow-neutral']]};
        `
      : props.color === ICONS_COLORS['base-text']
      ? css`
          background: ${props.theme[ICONS_COLORS['base-text']]};
        `
      : props.color === ICONS_COLORS['purple-neutral'] &&
        css`
          background: ${props.theme[ICONS_COLORS['purple-neutral']]};
        `}
`
