export default class CarDTO {
  id?: number
  marcaid: number
  modelo: string
  ano: number
  foto: string
  placa: string
  cor: string
  valordiaria: number

  convertToFormData() {
    const formDataCar = new FormData()
    formDataCar.append('marcaid', String(this.marcaid))
    formDataCar.append('modelo', this.modelo)
    formDataCar.append('ano', String(this.ano))
    formDataCar.append('placa', this.placa)
    formDataCar.append('cor', this.cor)
    formDataCar.append('valordiaria', String(this.valordiaria))
    formDataCar.append('foto', this.foto)

    return formDataCar
  }

  constructor(marcaid: number, modelo: string, ano: number, foto: string, placa: string, cor: string, valordiaria: number, id?: number) {
    this.marcaid = marcaid
    this.modelo = modelo
    this.ano = ano
    if (foto && (foto as any).lastModified) this.foto = foto
    this.placa = placa
    this.cor = cor
    this.valordiaria = valordiaria
    if (id !== undefined) this.id = id
  }
}
