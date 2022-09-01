import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { FormContainer } from './style'

export function AddressForm() {
  const { register } = useFormContext()
  const [zipCode, setZipCode] = useState('')

  async function handleZipCodeChange() {
    const addressResponse = await fetch(
      `https://viacep.com.br/ws/${zipCode}/json/`,
      {
        mode: 'no-cors',
      },
    )
    // const address = await addressResponse.json()
    console.log(addressResponse.json())
  }

  return (
    <FormContainer>
      <input
        type="text"
        placeholder="CEP"
        {...register('customerAddress.zipCode', {
          valueAsNumber: true,
          onBlur: () => handleZipCodeChange(),
          onChange: (event) => setZipCode(event.target.value),
        })}
      />
      <input
        type="text"
        placeholder="Rua"
        {...register('customerAddress.streetName')}
      />
      <div>
        <input
          type="number"
          placeholder="Número"
          {...register('customerAddress.number', { valueAsNumber: true })}
        />
        <div className="complement-input">
          <input
            type="text"
            placeholder="Complemento"
            {...register('customerAddress.complement')}
          />
          <span>Opcional</span>
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Bairro"
          {...register('customerAddress.district')}
        />
        <input
          type="text"
          placeholder="Cidade"
          {...register('customerAddress.city')}
        />
        <input
          type="text"
          placeholder="UF"
          className="state-input"
          {...register('customerAddress.state')}
        />
      </div>
    </FormContainer>
  )
}
