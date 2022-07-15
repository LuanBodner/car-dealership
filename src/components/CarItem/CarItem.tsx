import React from 'react'
import { CarItemProps } from './CarItemProps'
import { Data } from './components/Data'
import { Icon } from './components/Icon'

export function CarItem(props: CarItemProps) {
  return (
    <div
      style={{
        width: '60vw',
        height: '30vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        cursor: 'pointer',
        margin: '10px',
        backgroundColor: '#ede9e8',
        border: '1px solid grey',
        borderTop: '1px solid grey',
      }}
    >
      <Icon />
      <Data color={props.color} brand={props.brand} name={props.name} />
    </div>
  )
}
