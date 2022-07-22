export default class CarDTO {
  id?: number
  marcaid: number
  modelo: string
  ano: number
  foto: string
  placa: string
  cor: string
  valordiaria: number

  constructor(marcaid: number, modelo: string, ano: number, foto: string, placa: string, cor: string, valordiaria: number, id?: number) {
    this.marcaid = marcaid
    this.modelo = modelo
    this.ano = ano
    this.foto = foto
    this.placa = placa
    this.cor = cor
    this.valordiaria = valordiaria
    if (id !== undefined) this.id = id
  }
}
