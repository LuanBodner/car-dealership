import CarDTO from 'data/dtos/CarDTO'

export function validateModel(model: string): string {
  let parsedModel = ''
  if (model && model.length) {
    parsedModel = model.replace(/[^a-zA-Z0-9 ]+/, '')
    if (parsedModel.length > 99) parsedModel = parsedModel.substring(0, 99)
  }

  return parsedModel
}

export function validateDailyFee(dailyFee: number | string) {
  let parsedDailyFee = '50'
  if (dailyFee !== undefined) {
    parsedDailyFee = String(dailyFee).replace(/[^0-9]+/, '')
    if (parsedDailyFee === '' || parsedDailyFee === 'NaN' || parsedDailyFee === undefined) parsedDailyFee = '50'
  }

  return Number(parsedDailyFee)
}

export function validateYear(year: number | string): number {
  let parsedYear = '2022'
  if (year !== undefined) {
    parsedYear = String(year).replace(/[^0-9]+/, '')
    if (parsedYear === '' || parsedYear === 'NaN' || parsedYear === undefined) parsedYear = '2022'
    if (parsedYear.length > 4) parsedYear = parsedYear.substring(0, 4)
  }

  return Number(parsedYear)
}

export function validatePlate(plate: string) {
  let parsedPlate = ''

  if (plate && plate.length) {
    parsedPlate = plate.replace(/[^A-Z0-9]+/, '')
    if (parsedPlate.length > 7) parsedPlate = parsedPlate.substring(0, 7)
  }

  return parsedPlate
}

export function validateColor(color: string) {
  let parsedColor = ''

  if (color && color.length) {
    parsedColor = color.replace(/[^a-zA-Z ]+/, '')
    if (parsedColor.length > 50) parsedColor = parsedColor.substring(0, 50)
  }

  return parsedColor
}

export function validateImage(type: string) {
  return type === 'image/png' ? true : false
}

export function validateFinalDTO(car: CarDTO) {
  let fields: Array<string> = new Array<string>()
  if (car.ano < 1800) fields.push('Ano')
  if (car.valordiaria < 50) fields.push('Valor de diárias')
  return fields
}
