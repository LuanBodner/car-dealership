import React from 'react'
import { DataProps } from '../CarItemProps'

export function Data(props: DataProps) {
  return (
    <div style={{ width: '43vw', height: '30vh', display: 'flex', alignItems: 'center' }}>
      <p style={{ fontSize: '32px', padding: '8px', marginRight: '5px' }}>{props.name}</p>
      {' - '}
      <p style={{ fontSize: '15px', padding: '8px' }}>{props.brand}</p>
      {' - '}
      <p style={{ fontSize: '15px', padding: '8px' }}>{props.color}</p>
    </div>
  )
}
