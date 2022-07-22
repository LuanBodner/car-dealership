import React from 'react'
import { useHistory } from 'react-router-dom'
import { Data } from './components/Data'
import { Icon } from './components/Icon'
import { ItemProps } from './ItemProps'

export function Item(props: ItemProps) {
  const history = useHistory()

  return (
    <div
      style={{ marginBottom: '15px', border: '1px solid grey', width: '42vw', height: '20vh', display: 'flex', justifyContent: 'space-evenly' }}
      onClick={() => {
        console.log('Clicou no carro')
        history.push('/edit-car/' + props.id)
      }}
    >
      <Icon image={props.image} />
      <Data brand={props.brand} color={props.color} name={props.name} />
      {props.children}
    </div>
  )
}
