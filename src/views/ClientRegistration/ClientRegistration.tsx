import { Button } from '@mui/material'
import { Form } from '@unform/web'
import { UnFormInput } from 'components/UnFormInput/UnFormInput'
import { UnFormSelect } from 'components/UnFormSelect/UnformSelect'
import { NodeAPI } from 'data/services/Service'
import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

export function ClientRegistration() {
  const formRef = useRef(null)
  const history = useHistory()

  const options = [
    { id: 'J', value: 'Jurídica' },
    { id: 'F', value: 'Física' },
  ]

  async function onSubmitForm(data: any) {
    try {
      await NodeAPI.post(`${process.env.REACT_APP_BASE_URL}/cliente`, data)
      toast.success('Novo cliente cadastrado com sucesso')
      history.push('/')
    } catch (error: any) {
      const fields: Array<string> = error.response?.data?.errors?.map((error: { param: any }) => error.param)
      if (fields.length) toast.error('Os seguintes campos possuem valores inválidos: ' + fields)
      else toast.error('Cliente não foi cadastrado')
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100vw' }}>
      <div style={{ width: '30vw' }}>
        <h4>Registro de clientes</h4>
        <Form ref={formRef} onSubmit={onSubmitForm}>
          <UnFormInput label={'Nome'} name={'nome'} />
          <UnFormSelect label={'Tipo'} items={options} name={'tipo'} />
          <UnFormInput label={'Documento'} name={'documento'} />
          <UnFormInput label={'Nro do Celular'} name={'celular'} />
          <UnFormInput label={'CNH'} name={'cnh'} />

          <Button type='submit' variant='outlined' style={{ backgroundColor: 'blue', color: 'white' }}>
            Cadastrar
          </Button>
        </Form>{' '}
      </div>
    </div>
  )
}
