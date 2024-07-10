import { Router } from "express";
import { listarVariables, CrearVariable, ActualizarVariable, desactivarVariable, buscarvariable, activarVariable, variablesActivas } from "../controllers/controllerVariables.js";
import { validacionVariable } from "../../validate/variable.js";
import { validarToken } from "../controllers/seguridad.controller.js";

const routeVariables = Router()

routeVariables.get("/listar", validarToken, listarVariables)

routeVariables.post("/crear",/* validarToken, */ /* validacionVariable, */CrearVariable)

routeVariables.put("/actualizar/:codigo",validarToken, ActualizarVariable)
routeVariables.put("/desactivar/:codigo",validarToken, desactivarVariable)
routeVariables.put("/activar/:codigo",validarToken, activarVariable)
routeVariables.get("/buscar/:codigo",validarToken, buscarvariable)
routeVariables.get("/activas",validarToken, variablesActivas)


export default routeVariables