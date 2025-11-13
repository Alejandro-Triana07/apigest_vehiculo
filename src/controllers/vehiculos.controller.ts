import { Request, Response } from "express";
import { vehiculos } from "../data/vehiculos.data";
import { Vehiculo } from "../models/vehiculo";

export class VehiculosController {
  obtenerTodos(req: Request, res: Response) {
    res.json(vehiculos);
  }

  obtenerDisponibles(req: Request, res: Response) {
    const disponibles = vehiculos.filter((v) => v.disponible);
    res.json(disponibles);
  }

  agregarVehiculo(req: Request, res: Response) {
    const { marca, modelo, anio } = req.body;
    const nuevoId =
      vehiculos.length > 0 ? vehiculos[vehiculos.length - 1].id + 1 : 1;
    const nuevoVehiculo = new Vehiculo(nuevoId, marca, modelo, anio, true);

    vehiculos.push(nuevoVehiculo);

    res.json({ message: "Vehicle added successfully", vehicle: nuevoVehiculo });
  }

  reemplazarVehiculo(req: Request, res: Response) {
    const { id, marca, modelo, anio, disponible } = req.body;

    const index = vehiculos.findIndex((v) => v.id === id);

    if (index !== -1) {
      vehiculos[index] = new Vehiculo(id, marca, modelo, anio, disponible);
      return res.json({ message: "Vehicle updated successfully" });
    }

    const nuevo = new Vehiculo(id, marca, modelo, anio, disponible);
    vehiculos.push(nuevo);

    return res.json({ message: "Vehicle added successfully" });
  }
  actualizarParcial(req: Request, res: Response) {
    const { id, ...cambios } = req.body;
    const vehiculo = vehiculos.find((v) => v.id === id);

    if (!vehiculo) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    Object.assign(vehiculo, cambios);

    res.json({ message: "Vehicle partially updated", vehicle: vehiculo });
  }
  eliminarVehiculo(req: Request, res: Response) {
    const { id } = req.body;

    const index = vehiculos.findIndex((v) => v.id === id);

    if (index === -1) {
      return res.status(404).json({ message: "Vehicle not found" });
    }

    vehiculos.splice(index, 1);
  }
}
