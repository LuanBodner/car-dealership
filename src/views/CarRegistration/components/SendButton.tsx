import { Button } from '@mui/material'
import { SendButtonProps } from 'data/props/SendButtonProps'
import React from 'react'

export function SendButton(props: SendButtonProps) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Button onClick={props.onClick} variant='contained'>
        Registrar
      </Button>
    </div>
  )
}
