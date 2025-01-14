import { model, Schema } from 'mongoose'

const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true, 
        lowercase: true,
    },

    description: {
        type: String,
        lowercase: true,
    }
})

export default model("category", categorySchema)