export default class CarDTO {
  name: string;
  plate: string;
  brand: string;

  constructor(name: string, plate: string, brand: string) {
    this.name = name;
    this.plate = plate;
    this.brand = brand;
  }
}
