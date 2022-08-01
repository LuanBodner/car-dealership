import { InputLabel, MenuItem, Select } from '@mui/material'
import { useField } from '@unform/core'
import { UnFormSelectProps } from 'data/props/UnFormSelectProps'
import React, { useEffect, useRef } from 'react'

export function UnFormSelect(props: UnFormSelectProps) {
  const selectRef = useRef()
  const objectUseField = useField(props.name)

  useEffect(() => {
    objectUseField.registerField({
      name: props.name,
      ref: selectRef,
      getValue: (ref: any) => {
        return ref.current.value
      },
    })
  })

  return (
    <div>
      <InputLabel id='input-select-label'>{props.label}</InputLabel>
      <Select
        ref={selectRef}
        labelId='input-select-label'
        label={props.label}
        style={{ width: '400px', marginBottom: '30px' }}
        onChange={(event) => {
          if (selectRef.current) (selectRef.current as any).value = event.target.value
        }}
      >
        {props?.items?.map((item) => {
          return <MenuItem value={item.id}>{item.value}</MenuItem>
        })}
      </Select>
    </div>
  )
}
