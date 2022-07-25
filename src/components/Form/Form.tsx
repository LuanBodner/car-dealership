import { Button, InputLabel, MenuItem, Select } from '@mui/material'
import { ImageLoader } from 'components/Form/components/ImageLoader'
import CarDTO from 'data/dtos/CarDTO'
import { FormProps } from 'data/props/FormProps'
import React, { useEffect, useState } from 'react'
import { FormTextField } from './components/FormTextField'

export function Form(props: FormProps) {
  const [id, setId] = useState<number>()
  const [brand, setBrand] = useState<number>(0)
  const [model, setModel] = useState<string>('')
  const [year, setYear] = useState<number>()
  const [plate, setPlate] = useState<string>('')
  const [color, setColor] = useState<string>('')
  const [dailyFee, setDailyFee] = useState<number>(0.0)
  const [image, setImage] = useState<string>()

  async function setValueToState() {
    const carDTO = await props.setInitialValues()
    if (carDTO !== undefined) {
      setId(carDTO.id)
      setBrand(carDTO.marcaid)
      setModel(carDTO.modelo)
      setYear(carDTO.ano)
      setPlate(carDTO.placa)
      setColor(carDTO.cor)
      setDailyFee(carDTO.valordiaria)
      setImage(carDTO.foto)
    }
  }

  useEffect(() => {
    if (props.setInitialValues !== undefined) setValueToState()
  }, [])

  function createCarDTO(): CarDTO {
    const parsedImage = image.includes(process.env.REACT_APP_IMAGE_PATH) ? image : process.env.REACT_APP_IMAGE_PATH + '/' + image
    return new CarDTO(brand, model, year, parsedImage, plate, color, dailyFee, id)
  }

  return (
    <>
      {(props.setInitialValues !== undefined &&
        brand !== undefined &&
        model !== undefined &&
        year !== undefined &&
        dailyFee !== undefined &&
        plate !== undefined &&
        color !== undefined &&
        image !== undefined) ||
      props.setInitialValues === undefined ? (
        <>
          <div>
            <InputLabel id='demo-simple-select-helper-label'>Marca</InputLabel>
            <Select
              labelId='demo-simple-select-helper-label'
              value={brand}
              label='Marca'
              style={{ width: '100%', marginBottom: '5%' }}
              onChange={(event: any) => {
                setBrand(event.target.value)
              }}
            >
              <MenuItem value=''>
                <em>Nenhum</em>
              </MenuItem>
              <MenuItem value={1}>BMW</MenuItem>
              <MenuItem value={2}>HONDA</MenuItem>
              <MenuItem value={3}>FORD</MenuItem>
              <MenuItem value={4}>FIAT</MenuItem>
            </Select>
          </div>
          <FormTextField label='Modelo' value={model} onChange={(value) => setModel(String(value))} />
          <FormTextField label='Ano' value={year} onChange={(value) => setYear(Number(value))} />
          <FormTextField label='Placa' value={plate} onChange={(value) => setPlate(String(value))} />
          <FormTextField label='Cor' value={color} onChange={(value) => setColor(String(value))} />
          <FormTextField label='Valor da diária' value={dailyFee} onChange={(value) => setDailyFee(Number(value))} />
          <ImageLoader image={image} onChangeImage={(element: string) => setImage(element)} />
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-evenly',
            }}
          >
            <Button
              onClick={() => {
                props.formHandle(createCarDTO())
              }}
              variant='contained'
            >
              {props.formButtonLabel}
            </Button>
            {props.onDelete !== undefined ? (
              <Button
                variant='outlined'
                style={{ backgroundColor: 'red', color: 'white' }}
                onClick={() => {
                  props.onDelete(createCarDTO())
                }}
              >
                Deletar
              </Button>
            ) : (
              <></>
            )}
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  )
}
