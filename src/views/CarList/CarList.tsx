import { Button } from '@mui/material'
import React from 'react'
import { Item } from './components/Item/Item'

const mockObject = [
  {
    id: 1,
    name: 'Uno',
    brand: 'Fiat',
    color: 'Preto',
    image: 'C:\\Users\\luanr\\Documents\\car-dealership\\src\\images\\pulse.png',
  },
  {
    id: 2,
    name: 'Uno',
    brand: 'Fiat',
    color: 'Branco',
    image: 'C:\\Users\\luanr\\Documents\\car-dealership\\src\\images\\pulse.png',
  },
  {
    id: 3,
    name: 'Uno',
    brand: 'Fiat',
    color: 'Vermelho',
    image: 'C:\\Users\\luanr\\Documents\\car-dealership\\src\\images\\pulse.png',
  },
  {
    id: 4,
    name: 'Uno',
    brand: 'Fiat',
    color: 'Preto',
    image: 'C:\\Users\\luanr\\Documents\\car-dealership\\src\\images\\pulse.png',
  },
  {
    id: 5,
    name: 'Uno',
    brand: 'Fiat',
    color: 'Preto',
    image: 'C:\\Users\\luanr\\Documents\\car-dealership\\src\\images\\pulse.png',
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
            return (
              <Item brand={element.brand} id={element.id} color={element.color} image={element.image} name={element.name}>
                <div>Texto filho</div>
              </Item>
            )
          })}
        </div>
      </div>
    </div>
  )
}
