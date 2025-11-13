"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehiculos = void 0;
const vehiculo_1 = require("../models/vehiculo");
exports.vehiculos = [
    new vehiculo_1.Vehiculo(1, "Toyota", "Hilux", 2020, true),
    new vehiculo_1.Vehiculo(2, "Chevrolet", "Spark", 2018, false)
];
