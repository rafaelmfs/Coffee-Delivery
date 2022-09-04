import styled from 'styled-components'

export const CoffeeContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: ${(props) => props.theme['base-subtitle']};
  }

  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
  }
`

export const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 0.5rem;
  list-style: none;

  label {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 1.5rem;
    padding: 0.375rem 0.75rem;
    border: 1px solid ${(props) => props.theme['yellow-neutral']};
    border-radius: 100px;
    color: ${(props) => props.theme['yellow-dark']};
    transition: 200ms;

    font-weight: 700;
    font-size: 0.625rem;
    line-height: 130%;
  }

  input:checked + label {
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
  }

  label:hover {
    cursor: pointer;
    background: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.white};
  }
`

export const CoffeeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  column-gap: 1rem;
  row-gap: 2.5rem;
  margin-top: 3.375rem;

  @media (min-width: 1400px) {
    column-gap: 2rem;
  }
  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, minmax(200px, 1fr));
  }
`
