import { Spinner, WarningCircle } from 'phosphor-react'
import { ChangeEvent, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { NewOrderFormValidation } from '../..'
import { ErrorMessage } from '../../style'
import { FormContainer, ZipCodeContainer, ErrorContainer } from './style'

export function AddressForm() {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<NewOrderFormValidation>()
  const [zipCode, setZipCode] = useState('')
  const [isZipCodeLoading, setIsZipCodeLoading] = useState(false)

  function handleZipCodeBlur() {
    const getAddressFromZipCode = async () => {
      setIsZipCodeLoading(true)
      const addressResponse = await fetch(
        `https://ws.apicep.com/cep/${zipCode}.json`,
      )
      const address = await addressResponse.json()
      setValue('customerAddress.streetName', address.address)
      setValue('customerAddress.district', address.district)
      setValue('customerAddress.city', address.city)
      setValue('customerAddress.state', address.state)
    }

    zipCode.length >= 9 &&
      getAddressFromZipCode().then(() => setIsZipCodeLoading(false))
  }

  function zipCodeFomat(event: ChangeEvent<HTMLInputElement>) {
    let zipCodeFormated = event.target.value.replace(/\D/g, '')
    zipCodeFormated = zipCodeFormated.replace(/^(\d{5})(\d)/, '$1-$2')

    setZipCode(() => zipCodeFormated)
  }

  return (
    <FormContainer>
      <ZipCodeContainer>
        <input
          type="text"
          placeholder="CEP"
          value={zipCode}
          maxLength={9}
          className={
            errors.customerAddress?.zipCode
              ? 'input-medium invalid'
              : 'input-medium'
          }
          {...register('customerAddress.zipCode', {
            onBlur: () => handleZipCodeBlur(),
            onChange: (event) => zipCodeFomat(event),
            disabled: isZipCodeLoading,
          })}
        />
        {isZipCodeLoading && (
          <Spinner weight="bold" className="zipCodeLoader" />
        )}
      </ZipCodeContainer>
      <input
        type="text"
        placeholder="Rua"
        className={errors.customerAddress?.streetName ? 'invalid' : ''}
        {...register('customerAddress.streetName', {
          disabled: isZipCodeLoading,
        })}
      />
      <div>
        <input
          type="number"
          placeholder="Número"
          className={
            errors.customerAddress?.number
              ? 'input-medium invalid'
              : 'input-medium'
          }
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
          className={
            errors.customerAddress?.district
              ? 'input-medium invalid'
              : 'input-medium'
          }
          {...register('customerAddress.district', {
            disabled: isZipCodeLoading,
          })}
        />
        <input
          type="text"
          placeholder="Cidade"
          className={
            errors.customerAddress?.city
              ? 'input-medium invalid'
              : 'input-medium'
          }
          {...register('customerAddress.city', {
            disabled: isZipCodeLoading,
          })}
        />
        <input
          type="text"
          placeholder="UF"
          className={
            errors.customerAddress?.state
              ? 'state-input invalid'
              : 'state-input'
          }
          {...register('customerAddress.state', {
            disabled: isZipCodeLoading,
          })}
        />
      </div>

      <div className="errorContainer">
        {errors.customerAddress?.zipCode && (
          <ErrorMessage>
            <WarningCircle weight="bold" />
            <p>{errors.customerAddress?.zipCode.message}</p>
          </ErrorMessage>
        )}
        {errors.customerAddress?.streetName && (
          <ErrorMessage>
            <WarningCircle weight="bold" />
            {errors.customerAddress?.streetName.message}
          </ErrorMessage>
        )}
        {errors.customerAddress?.number && (
          <ErrorMessage>
            <WarningCircle weight="bold" />
            {errors.customerAddress?.number.message}
          </ErrorMessage>
        )}
        {errors.customerAddress?.district && (
          <ErrorMessage>
            <WarningCircle weight="bold" />
            {errors.customerAddress?.district.message}
          </ErrorMessage>
        )}
        {errors.customerAddress?.city && (
          <ErrorMessage>
            <WarningCircle weight="bold" />
            {errors.customerAddress?.city.message}
          </ErrorMessage>
        )}
        {errors.customerAddress?.state && (
          <ErrorMessage>
            <WarningCircle weight="bold" />
            {errors.customerAddress?.state.message}
          </ErrorMessage>
        )}
      </div>
    </FormContainer>
  )
}
