import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    height: 2.625rem;
    padding: 0.75rem;
    flex: 1;
    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;
    color: ${(props) => props.theme['base-text']};
    background: ${(props) => props.theme['base-input']};
  }
  input:first-child {
    max-width: 30%;
  }

  input::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  input:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  .complement-input {
    flex: 1;
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
    align-items: center;
    gap: 0.75rem;

    box-sizing: border-box;
    overflow: hidden;

    .state-input {
      max-width: 12%;
    }
  }
`