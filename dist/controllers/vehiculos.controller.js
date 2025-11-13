"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculosController = void 0;
const vehiculos_data_1 = require("../data/vehiculos.data");
const vehiculo_1 = require("../models/vehiculo");
class VehiculosController {
    obtenerTodos(req, res) {
        res.json(vehiculos_data_1.vehiculos);
    }
    obtenerDisponibles(req, res) {
        const disponibles = vehiculos_data_1.vehiculos.filter((v) => v.disponible);
        res.json(disponibles);
    }
    agregarVehiculo(req, res) {
        const { marca, modelo, anio } = req.body;
        const nuevoId = vehiculos_data_1.vehiculos.length > 0 ? vehiculos_data_1.vehiculos[vehiculos_data_1.vehiculos.length - 1].id + 1 : 1;
        const nuevoVehiculo = new vehiculo_1.Vehiculo(nuevoId, marca, modelo, anio, true);
        vehiculos_data_1.vehiculos.push(nuevoVehiculo);
        res.json({ message: "Vehicle added successfully", vehicle: nuevoVehiculo });
    }
    reemplazarVehiculo(req, res) {
        const { id, marca, modelo, anio, disponible } = req.body;
        const index = vehiculos_data_1.vehiculos.findIndex((v) => v.id === id);
        if (index !== -1) {
            vehiculos_data_1.vehiculos[index] = new vehiculo_1.Vehiculo(id, marca, modelo, anio, disponible);
            return res.json({ message: "Vehicle updated successfully" });
        }
        const nuevo = new vehiculo_1.Vehiculo(id, marca, modelo, anio, disponible);
        vehiculos_data_1.vehiculos.push(nuevo);
        return res.json({ message: "Vehicle added successfully" });
    }
    actualizarParcial(req, res) {
        const { id, ...cambios } = req.body;
        const vehiculo = vehiculos_data_1.vehiculos.find((v) => v.id === id);
        if (!vehiculo) {
            return res.status(404).json({ message: "Vehicle not found" });
        }
        Object.assign(vehiculo, cambios);
        res.json({ message: "Vehicle partially updated", vehicle: vehiculo });
    }
    eliminarVehiculo(req, res) {
        const { id } = req.body;
        const index = vehiculos_data_1.vehiculos.findIndex((v) => v.id === id);
        if (index === -1) {
            return res.status(404).json({ message: "Vehicle not found" });
        }
        vehiculos_data_1.vehiculos.splice(index, 1);
    }
}
exports.VehiculosController = VehiculosController;
