import React from 'react'
const logo = require('../../../images/logo512.png')
export function Icon() {
  return (
    <div style={{ border: '1px solid grey', width: '15vw', height: '25vh' }}>
      <img src={logo} alt='' style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
    </div>
  )
}
