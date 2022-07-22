import { Button } from '@mui/material'
import React from 'react'
import { Item } from './components/Item/Item'

const mockObject = [
  {
    id: 1,
    marcaid: 1,
    modelo: 'Modelo',
    ano: 1995,
    foto: 'http://localhost:8081/suv.png',
    placa: 1234567,
    cor: 'preto',
    valordiaria: 50.0,
  },
]

export function CarList() {
  function goToCreatePage() {
    window.location.href = '/create-car'
  }

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center' }}>
      <div>
        <div style={{ marginTop: '30px', marginBottom: '30px', display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant='contained' onClick={goToCreatePage}>
            Criar Veículo
          </Button>
        </div>
        <div style={{ height: '800px', overflowY: 'scroll' }}>
          {mockObject.map((element) => {
            return <Item brand={element.modelo} id={element.id} color={element.cor} image={element.foto} name={String(element.ano)} />
          })}
        </div>
      </div>
    </div>
  )
}
