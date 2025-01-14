import jwt from "jsonwebtoken"
import { SECRET } from "../config.js"


export const verifyTokenMiddleware = (req, res, next) => {
    try {
        //Pasamos a constante el contenido del header de authorization
        const authHeader = req.headers.authorization
        console.log({authHeader})
        //Queremos saber si lo recibimos bien
        if(!authHeader || !authHeader.startsWith("Bearer ") ){
            return res.status(400).json({ message: "Access token was not provided" })
        }

        const token = authHeader.split(" ")[1];
        console.log({token})
        const decoded = jwt.verify(token, SECRET)
        console.log({decoded})

        // guardar en el request del user
        req.user = decoded

        next()
    } catch (error) {
        return res.status(400).json({ message: "Invalid access token", error })
    }
}