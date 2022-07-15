export type DataProps = {
  id?: string
  name: string
  brand: string
  color: string
}

export type CarItemProps = DataProps & {
  image?: string
}
