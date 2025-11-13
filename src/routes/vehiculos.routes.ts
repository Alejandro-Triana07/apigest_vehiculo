import { Router } from "express";
import { VehiculosController } from "../controllers/vehiculos.controller";

const router = Router();
const controller = new VehiculosController();

router.get("/vehicles", controller.obtenerTodos);
router.get("/available-vehicles", controller.obtenerDisponibles);
router.post("/vehicles", controller.agregarVehiculo);
router.put("/vehicles", controller.reemplazarVehiculo);
router.patch("/vehicles", controller.actualizarParcial);
router.delete("/vehicles", controller.eliminarVehiculo);

export default router;
