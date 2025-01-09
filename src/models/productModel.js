import { model, Schema } from "mongoose"

const statusEnum = ["AVAILABLE", "NOT AVAILABLE", "DISCONTINUED"]

//Creamos esquema / instancia de esquema de mongoDB
const productSchema = new Schema({
    //Escribir las propiedades
    name: {
        type: String,
        //Es un campo obligatorio
        //Si no se manda el campo se responde con el mensaje
        required: [true, "Name field is required"],
        //Es unico e irrepetible
        unique: true,
        //Quita espacios adelante y atras del valor
        trim: true,
        //guardar el valor en minusculas
        lowercase: true,
        //Largo minimo
        minLength: 3,
        //largo maximo
        maxLength: 30
    },

    status: {
        type: String,
        validate: {
            validator: function (status) {
                return statusEnum.includes(status)
            },
            message: (props) =>  `${props.value} is not a valid status`
        },
        required: true, // Campo obligatorio
        enum: statusEnum, // Validador nativo de mongoose
    },

    createdAt: {
        type: Date,
        default: Date.now()
    },

    price: {
        type: Number,
        required: [true, "Price field is required"],
        min: [0, "Price field has to be a number"]
    },

    image: {
        type: String,
        default: "https://picsum.photos/400"
    }
})

//El nombre del modelo pasa a minusculas y plural en la db Product (model) -> products (collection)
//Podemos añadir un tercer argumento para especificar el nombre de la coleccion

export default model("product", productSchema);