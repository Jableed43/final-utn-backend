import { Router } from "express"
import { getProducts } from "../contollers/productController.js";


//Inicializamos el router
const productRoute = Router();


//generar las rutas
productRoute.get("/get", getProducts)

export default productRoute;