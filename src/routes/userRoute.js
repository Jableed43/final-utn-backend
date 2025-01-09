import { Router } from "express"
import { createUser, getUsers, validate } from "../contollers/userController.js";


//Inicializamos el router
const userRoute = Router();


//generar las rutas
userRoute.get("/get", getUsers)
userRoute.post("/create", createUser)
userRoute.post("/login", validate)

export default userRoute;