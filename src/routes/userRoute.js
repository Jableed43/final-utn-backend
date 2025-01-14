import { Router } from "express"
import { createUser, getUsers, validate } from "../contollers/userController.js";


//Inicializamos el router
const userRoute = Router();


//generar las rutas (metodo http, path, controlador-servicio)
userRoute.get("/get", getUsers)
userRoute.post("/create", createUser)
userRoute.post("/login", validate)

export default userRoute;