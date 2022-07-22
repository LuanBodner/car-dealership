import { CircularProgress, TextField } from '@mui/material'
import { AxiosResponse } from 'axios'
import CarDTO from 'data/dtos/CarDTO'
import { NodeAPI } from 'data/services/Service'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export function CarEdit() {
  const objectParam = useParams<{ id: string }>()
  const [mockName, setMockName] = useState<string>()

  async function getCarById() {
    try {
      const response: AxiosResponse<CarDTO> = await NodeAPI.get(`${process.env.REACT_APP_BASE_URL}/veiculo/${objectParam.id}`)

      console.log(response.data)
      setMockName(response.data.modelo)
    } catch (error) {}
  }

  useEffect(() => {
    console.log('O id do carro que queremos buscar do banco é: ')
    console.log(objectParam.id)
    getCarById()
  }, [])

  return (
    <>
      {mockName === undefined ? (
        <>
          <CircularProgress />
        </>
      ) : (
        <TextField
          value={mockName}
          onChange={(event) => {
            setMockName(event.target.value)
          }}
          style={{ width: '50%', marginBottom: '5%' }}
          id='outlined-basic'
          label='Nome do modelo'
          variant='outlined'
        />
      )}
    </>
  )
}
