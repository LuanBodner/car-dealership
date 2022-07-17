import React from 'react'
import { Data } from './components/Data'
import { Icon } from './components/Icon'
import { ItemProps } from './ItemProps'

export function Item(props: ItemProps) {
  return (
    <div style={{ marginBottom: '15px', border: '1px solid grey', width: '42vw', height: '20vh', display: 'flex', justifyContent: 'space-evenly' }}>
      <Icon image={props.image} />
      <Data brand={props.brand} color={props.color} name={props.name} />
    </div>
  )
}
