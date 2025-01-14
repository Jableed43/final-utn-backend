import { Router } from "express"
import { createProduct, getProducts } from "../contollers/productController.js";
import { verifyTokenMiddleware } from "../middlewares/verifyTokenMiddleware.js";


//Inicializamos el router
const productRoute = Router();


//generar las rutas
productRoute.get("/get", verifyTokenMiddleware, getProducts)
productRoute.post("/create", createProduct)

export default productRoute;