export interface CustomerInformation {
  customerAddress: {
    zipCode: number
    streetName: string
    number: number
    complement?: string
    district: string
    city: string
    state: string
  }
  formOfPayment: 'credit-card' | 'debit-card' | 'money'
}
