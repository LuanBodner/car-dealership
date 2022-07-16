import React from 'react'
import { DataProps } from '../ItemProps'

export function Data(props: DataProps) {
  return (
    <div style={{ width: '32vw', height: '20vh', display: 'flex', alignItems: 'center' }}>
      <p style={{ fontSize: '30px', padding: '8px', marginRight: '5px' }}>{props.name}</p>
      <p style={{ fontSize: '15px', padding: '8px' }}>{props.brand}</p>
      <p style={{ fontSize: '15px', padding: '8px' }}>{props.color}</p>
    </div>
  )
}
