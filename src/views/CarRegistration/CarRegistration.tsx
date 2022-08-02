import { Form } from 'components/Form/Form'
import CarDTO from 'data/dtos/CarDTO'
import { CarRegistrationProps } from 'data/props/CarRegistrationProps'
import { NodeAPI } from 'data/services/Service'
import { default as React } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

function CarRegistration(props: CarRegistrationProps) {
  const history = useHistory()

  async function onSendForm(carDTO: CarDTO) {
    try {
      await NodeAPI.post(`${process.env.REACT_APP_BASE_URL}/veiculo`, carDTO.convertToFormData())

      toast.success('Novo veículo cadastrado com sucesso')
      history.push('/')
    } catch (error: any) {
      const fields: Array<string> = error.response?.data?.errors?.map((error: { param: any }) => error.param)
      if (fields.length) toast.error('Os seguintes campos possuem valores inválidos: ' + fields)
      else toast.error('Veículo não foi cadastrado')
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100vw' }}>
      <div style={{ width: '30vw' }}>
        <h4>Registro de veículos</h4>
        <Form formButtonLabel={'Registrar'} formHandle={onSendForm} />
      </div>
    </div>
  )
}

export default CarRegistration
