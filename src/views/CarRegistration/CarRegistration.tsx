import { InputLabel, MenuItem, Select, TextField } from '@mui/material'
import CarDTO from 'data/dtos/CarDTO'
import { CarRegistrationProps } from 'data/props/CarRegistrationProps'
import { NodeAPI } from 'data/services/Service'
import { default as React, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ImageLoader } from './components/ImageLoader'
import { SendButton } from './components/SendButton'

function CarRegistration(props: CarRegistrationProps) {
  const [brand, setBrand] = useState<number>(0)
  const [model, setModel] = useState<string>('')
  const [year, setYear] = useState<number>()
  const [plate, setPlate] = useState<string>('')
  const [color, setColor] = useState<string>('')
  const [dailyFee, setDailyFee] = useState<number>(0.0)
  const [image, setImage] = useState<string>('')
  const history = useHistory()

  async function onSendForm() {
    const carDTO: CarDTO = new CarDTO(brand, model, year, image, plate, color, dailyFee)
    try {
      await NodeAPI.post(`${process.env.REACT_APP_BASE_URL}/veiculo`, carDTO)
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
        <div>
          <TextField
            value={model}
            onChange={(event) => {
              setModel(event.target.value)
            }}
            style={{ width: '100%', marginBottom: '5%' }}
            id='outlined-basic'
            label='Modelo'
            variant='outlined'
          />
        </div>
        <div>
          <TextField
            value={year}
            onChange={(event) => {
              setYear(Number(event.target.value))
            }}
            style={{ width: '100%', marginBottom: '5%' }}
            id='outlined-basic'
            label='Ano'
            variant='outlined'
          />
        </div>
        <div>
          <TextField
            value={plate}
            onChange={(event) => {
              setPlate(event.target.value)
            }}
            style={{ width: '100%', marginBottom: '5%' }}
            id='outlined-basic'
            label='Placa'
            variant='outlined'
          />
        </div>
        <div>
          <TextField
            value={color}
            onChange={(event) => {
              setColor(event.target.value)
            }}
            style={{ width: '100%', marginBottom: '5%' }}
            id='outlined-basic'
            label='Cor'
            variant='outlined'
          />
        </div>
        <div>
          <TextField
            value={dailyFee}
            onChange={(event) => {
              setDailyFee(Number(event.target.value))
            }}
            style={{ width: '100%', marginBottom: '5%' }}
            id='outlined-basic'
            label='Valor da diária'
            variant='outlined'
          />
        </div>

        <ImageLoader onChangeImage={(element: string) => setImage(element)} />
        <SendButton onClick={onSendForm} />
      </div>
    </div>
  )
}

export default CarRegistration
