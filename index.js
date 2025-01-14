//Entry point

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import productRoute from './src/routes/productRoute.js'
import { connectDB } from './src/db.js'
import cookieParser from 'cookie-parser'
import userRoute from './src/routes/userRoute.js'
import { PORT } from './src/config.js'
import categoryRoute from './src/routes/categoryRoute.js'

//Ejecucion de express para inicializar el servidor
const app = express();

//Middleware

//Permitir las conexiones cors
app.use(cors({
    origin: '*', // Permite cualquier origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  }));

//Parsea a json las solicitudes
app.use(bodyParser.json())

//Habilitando lectura de las cookies
app.use(cookieParser())

//Parsea body con url encoded
app.use(bodyParser.urlencoded({extended: true}))

//conectar a la base de datos
connectDB()

//rutas
/// prefijo: api | agrupador: product
app.use("/api/product", productRoute)
app.use("/api/user", userRoute)
app.use("/api/category", categoryRoute)


app.listen(PORT, () => {
    console.log("Server running")
})