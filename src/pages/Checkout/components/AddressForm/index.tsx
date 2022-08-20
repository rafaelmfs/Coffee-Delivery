import { FormContainer } from './style'

export function AddressForm() {
  return (
    <FormContainer>
      <input type="number" placeholder="CEP" name="zip-code" />
      <input type="text" placeholder="Rua" name="street" />
      <div>
        <input type="number" placeholder="Número" name="number" />
        <div className="complement-input">
          <input type="text" placeholder="Complemento" name="complement" />
          <span>Opcional</span>
        </div>
      </div>
      <div>
        <input type="text" placeholder="Bairro" name="district" />
        <input type="text" placeholder="Cidade" name="city" />
        <input
          type="text"
          placeholder="UF"
          name="state"
          className="state-input"
        />
      </div>
    </FormContainer>
  )
}
