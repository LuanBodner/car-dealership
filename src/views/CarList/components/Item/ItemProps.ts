import React from 'react'

export interface ItemProps {
  id: number
  name: string
  brand: string
  color: string
  image: string
  children?: React.ReactNode
}

export interface DataProps {
  name: string
  brand: string
  color: string
}

export interface IconProps {
  image: string
}
