import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    width: 100%;
    height: 2.625rem;
    padding: 0.75rem;
    flex: 1;
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme['base-input']};
  }

  input::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  input:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  .invalid {
    border: 1px solid red;
  }

  .complement-input {
    width: 100%;
    flex: 1;
    justify-content: center;
    position: relative;
    input {
      min-width: 100%;
    }

    input:not(:placeholder-shown) + span {
      display: none;
    }

    span {
      position: absolute;
      right: 0.75rem;
      font-size: 0.75rem;
      line-height: 130%;
      font-style: italic;
      color: ${(props) => props.theme['base-label']};
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;

    box-sizing: border-box;
    overflow: hidden;
  }

  div.errorContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  @media (min-width: 700px) {
    div {
      flex-direction: row;
      align-items: center;
    }
    .state-input {
      max-width: 3.75rem;
      min-width: 12%;
    }
    input.input-medium {
      max-width: 12.5rem;
    }
  }
`

export const ZipCodeContainer = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .zipCodeLoader {
    position: absolute;
    right: 5%;
    animation: spin 2s infinite linear;
  }
  input {
    width: 100%;
  }

  @media (min-width: 700px) {
    max-width: 12.5rem;
    width: 40%;
  }
`
