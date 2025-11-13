import express from "express";
import vehiculosRoutes from "./routes/vehiculos.routes";

const app = express();

app.use(express.json());
app.use(vehiculosRoutes);

export default app;
