import React from 'react'
import { IconProps } from '../ItemProps'

export function Icon(props: IconProps) {
  return (
    <div style={{ width: '10vw', height: '20vh' }}>
      <img src={require('C:\\Users\\luanr\\Documents\\car-dealership\\src\\images\\pulse.png')} alt='' style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
    </div>
  )
}
