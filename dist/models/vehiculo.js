"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculo = void 0;
class Vehiculo {
    constructor(id, marca, modelo, anio, disponible = true) {
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.disponible = disponible;
    }
}
exports.Vehiculo = Vehiculo;
