import CarDTO from 'data/dtos/CarDTO'

export interface FormTextFieldProps {
  label: string
  value: string | number
  onChange: (variable: string | number) => void
}

export interface FormProps {
  formButtonLabel: string
  formHandle: (carDTO: CarDTO) => void
  onDelete?: (carDTO: CarDTO) => void
  setInitialValues?: () => Promise<CarDTO>
}
