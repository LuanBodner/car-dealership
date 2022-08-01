export interface UnFormSelectProps {
  name: string
  label: string
  items?: Array<UnformSelectItems>
}

export interface UnformSelectItems {
  id: string
  value: string
}
