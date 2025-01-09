//Entry point

import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import productRoute from './src/routes/productRoute.js'
import { connectDB } from './src/db.js'
import cookieParser from 'cookie-parser'
import userRoute from './src/routes/userRoute.js'



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
app.use("/api/product", productRoute)
app.use("/api/user", userRoute)



app.listen(3000, () => {
    console.log("Server running")
})