import { connect } from "mongoose"
import { MONGODB_URI } from "./config.js"

export const connectDB = async () => {
    try {
       await connect(MONGODB_URI)
       console.log("Database connected")
    } catch (error) {
        console.error("Error connecting to database", error)
        //Si falla salimos de esta ejecucion
        process.exit(1)
    }
}