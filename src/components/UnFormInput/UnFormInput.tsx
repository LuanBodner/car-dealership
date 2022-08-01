import { TextField } from '@mui/material'
import { useField } from '@unform/core'
import { UnFormInputProps } from 'data/props/UnFormInputProps'
import React, { useEffect, useRef } from 'react'

export function UnFormInput(props: UnFormInputProps) {
  const inputRef = useRef()
  const objectUseField = useField(props.name)

  useEffect(() => {
    objectUseField.registerField({
      name: props.name,
      ref: inputRef,
      getValue: (ref: any) => {
        return ref.current.value
      },
    })
  })

  return (
    <div>
      <TextField
        ref={inputRef}
        style={{ width: '400px', marginBottom: '30px' }}
        id='outlined-basic'
        variant='outlined'
        label={props.label}
        onChange={(event) => {
          if (inputRef.current) (inputRef.current as any).value = event.target.value
        }}
      />
    </div>
  )
}
