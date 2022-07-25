import { TextField } from '@mui/material'
import { FormTextFieldProps } from 'data/props/FormProps'
import React from 'react'

export function FormTextField(props: FormTextFieldProps) {
  return (
    <div>
      <TextField
        value={props.value}
        onChange={(event) => {
          props.onChange(event.target.value)
        }}
        style={{ width: '100%', marginBottom: '5%' }}
        id='outlined-basic'
        label={props.label}
        variant='outlined'
      />
    </div>
  )
}
