import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 1440px;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 1044px) {
    font-size: 62.5%;
  }
`
