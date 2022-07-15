import { Button } from '@mui/material'
import { CarItem } from 'components/CarItem/CarItem'
import React from 'react'

const mockObject = [
  {
    name: 'Uno',
    brand: 'Fiat',
    color: 'Preto',
  },
  {
    name: 'Uno',
    brand: 'Fiat',
    color: 'Preto',
  },
  {
    name: 'Uno',
    brand: 'Fiat',
    color: 'Preto',
  },
  {
    name: 'Uno',
    brand: 'Fiat',
    color: 'Preto',
  },
  {
    name: 'Uno',
    brand: 'Fiat',
    color: 'Preto',
  },
]

export function CarList() {
  return (
    <div style={{ width: '100vw', display: 'flex', justifyContent: 'center' }}>
      <div style={{ overflowY: 'hidden' }}>
        <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'flex-end', marginRight: '20px', marginBottom: '20px' }}>
          <Button variant='contained'>Criar veículo</Button>
        </div>
        <div style={{ height: '550px', overflowY: 'scroll' }}>
          {mockObject.map((element) => {
            return <CarItem name={element.name} brand={element.brand} color={element.color} />
          })}
        </div>
      </div>
    </div>
  )
}
