import { AxiosResponse } from 'axios'
import { Form } from 'components/Form/Form'
import CarDTO from 'data/dtos/CarDTO'
import { NodeAPI } from 'data/services/Service'
import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

export function CarEdit() {
  const objectParam = useParams<{ id: string }>()
  const history = useHistory()

  async function onDelete(carDTO: CarDTO) {
    try {
      await NodeAPI.delete(`${process.env.REACT_APP_BASE_URL}/veiculo/${carDTO.id}`)
      toast.success('Veículo deletado com sucesso')
      history.push('/')
    } catch (error) {
      toast.success('Falha ao deletar um veículo')
    }
  }

  async function onSendForm(carDTO: CarDTO) {
    try {
      const id = carDTO.id
      delete carDTO.id
      await NodeAPI.put(`${process.env.REACT_APP_BASE_URL}/veiculo/${id}`, carDTO.convertToFormData())
      toast.success('Veículo atualizado com sucesso')
      history.push('/')
    } catch (error: any) {
      const fields: Array<string> = error.response?.data?.errors?.map((error: { param: any }) => error.param)
      if (fields && fields.length) toast.error('Os seguintes campos possuem valores inválidos: ' + fields)
      else toast.error('Veículo não foi atualizado')
    }
  }

  async function getCarById() {
    let response: AxiosResponse<CarDTO>
    try {
      response = await NodeAPI.get(`${process.env.REACT_APP_BASE_URL}/veiculo/${objectParam.id}`)
    } catch (error) {}

    return response.data
  }

  useEffect(() => {
    getCarById()
  }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100vw' }}>
      <div style={{ width: '30vw' }}>
        <h4>Editar de veículo</h4>
        <Form formButtonLabel={'Editar'} setInitialValues={getCarById} formHandle={onSendForm} onDelete={onDelete} />
      </div>
    </div>
  )
}
