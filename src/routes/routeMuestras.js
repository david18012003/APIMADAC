import { Router } from "express";
import { listarMuestras, CrearMuestra, actualizarMuestra, desactivarMuestras, BuscarMuestra, activarMuestras, muestrasActivas, muestrasTable } from "../controllers/controllerMuestras.js";
import { validacionMuestra } from '../../validate/muestra.js'
import { validarToken } from "../controllers/seguridad.controller.js";


const RouteMuestras = Router();

//localhost:3000/actualizarMuestra

RouteMuestras.get("/listar", validarToken, listarMuestras);
//validation datos 
RouteMuestras.post("/crear",validarToken, CrearMuestra);

RouteMuestras.put("/actualizar/:codigo",validarToken, actualizarMuestra);
RouteMuestras.put("/desactivar/:codigo",validarToken, desactivarMuestras)
RouteMuestras.put("/activar/:codigo",validarToken, activarMuestras)
RouteMuestras.get("/buscar/:codigo",validarToken, BuscarMuestra);
RouteMuestras.get("/activas",validarToken, muestrasActivas);
RouteMuestras.get("/table",validarToken, muestrasTable);

export default RouteMuestras;
