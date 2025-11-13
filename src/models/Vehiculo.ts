export class Vehiculo {
  id: number;
  marca: string;
  modelo: string;
  anio: number;
  disponible: boolean;

  constructor(
    id: number,
    marca: string,
    modelo: string,
    anio: number,
    disponible: boolean = true
  ) {
    this.id = id;
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.disponible = disponible;
  }
}
