import { Button } from '@mui/material'
import CarDTO from 'data/dtos/CarDTO'
import { NodeAPI } from 'data/services/Service'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Item } from './components/Item/Item'

export function CarList() {
  const [cars, setCars] = useState<Array<CarDTO>>()
  function goToCreatePage() {
    window.location.href = '/create-car'
  }

  async function getListOfCars() {
    try {
      const response = await NodeAPI.get(`${process.env.REACT_APP_BASE_URL}/veiculo`)
      setCars(response.data)
    } catch (error) {
      toast.error('Erro na busca de veículos')
    }
  }

  useEffect(() => {
    getListOfCars()
  }, [])

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center' }}>
      <div>
        <div style={{ marginTop: '30px', marginBottom: '30px', display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant='contained' onClick={goToCreatePage}>
            Criar Veículo
          </Button>
        </div>
        <div style={{ height: '800px', overflowY: 'scroll' }}>
          {cars?.map((element) => {
            return <Item brand={element.modelo} id={element.id} color={element.cor} image={element.foto} name={String(element.ano)} />
          })}
        </div>
      </div>
    </div>
  )
}
