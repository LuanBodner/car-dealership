import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { CarRegistrationProps } from 'views/CarRegistration/CarRegistrationProps'

function CarRegistration(props: CarRegistrationProps) {
  const [name, setName] = useState<string>('')
  const [brand, setBrand] = useState<string>('')
  const [plate, setPlate] = useState<string>('')

  // function onClickEvent() {
  //   if (process.env.REACT_APP_IS_DEVELOPMENT === 'true') {
  //     console.log('Cannot define car in development environment');
  //   } else {
  //     const carDTO = new CarDTO(name, plate, brand);
  //   }
  // }

  return (
    <div style={{ width: '30vw' }}>
      <h4>Registro de veículos</h4>

      {props.hasName === undefined || props.hasName === true ? (
        <div>
          <TextField
            value={name}
            onChange={(event: { target: { value: React.SetStateAction<string> } }) => {
              setName(event.target.value)
            }}
            style={{ width: '100%', marginBottom: '5%' }}
            id='outlined-basic'
            label='Nome'
            variant='outlined'
          />
        </div>
      ) : (
        <></>
      )}
      <div>
        <TextField
          value={brand}
          onChange={(event: { target: { value: React.SetStateAction<string> } }) => {
            setBrand(event.target.value)
          }}
          style={{ width: '100%', marginBottom: '5%' }}
          id='outlined-basic'
          label='Marca'
          variant='outlined'
        />
      </div>
      <div>
        <TextField
          value={plate}
          onChange={(event: { target: { value: React.SetStateAction<string> } }) => {
            setPlate(event.target.value)
          }}
          style={{ width: '100%', marginBottom: '5%' }}
          id='outlined-basic'
          label='Placa'
          variant='outlined'
        />
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Button onClick={() => {}} variant='contained'>
          Registrar
        </Button>
      </div>
    </div>
  )
}

export default CarRegistration
