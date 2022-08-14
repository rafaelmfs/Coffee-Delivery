import styled, { css } from 'styled-components'
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
  }

  p {
    font-family: 'Roboto';
    font-size: 1.25rem;
    line-height: 130%;
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
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  margin-right: 0.625rem;

  color: ${(props) => props.theme.white};

  ${(props) =>
    props.color === 'yellow-dark'
      ? css`
          background: ${props.theme['yellow-dark']};
        `
      : props.color === 'yellow'
      ? css`
          background: ${props.theme['yellow-neutral']};
        `
      : props.color === 'gray'
      ? css`
          background: ${props.theme['base-text']};
        `
      : css`
          background: ${props.theme['purple-neutral']};
        `}
`

export const CoffeeContainer = styled.section``

export const FilterList = styled.nav``

export const CoffeeList = styled.div``
