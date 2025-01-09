import { connect } from "mongoose"

export const connectDB = async () => {
    try {
       await connect("mongodb://127.0.0.1:27017/backend")
       console.log("Database connected")
    } catch (error) {
        console.error("Error connecting to database", error)
        //Si falla salimos de esta ejecucion
        process.exit(1)
    }
}