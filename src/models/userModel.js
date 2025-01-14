import { model, Schema } from "mongoose"
import bcrypt from 'bcrypt'

const rolesEnum = ["ADMIN", "MERCHANT", "CUSTOMER"]

//Creamos esquema / instancia de esquema de mongoDB
const userSchema = new Schema({
    //Escribir las propiedades
    name: {
        type: String,
        //Es un campo obligatorio
        //Si no se manda el campo se responde con el mensaje
        required: [true, "Name field is required"],
        //Quita espacios adelante y atras del valor
        trim: true,
        //guardar el valor en minusculas
        lowercase: true,
        //Largo minimo
        minLength: 3,
        //largo maximo
        maxLength: 30
    },

    image: {
        type: String,
        default: "https://picsum.photos/400"
    },

    password: {
        type: String,
        required: [true, "Name field is required"],
        trim: true,
    },

    email: {
        type: String,
        required: [true, "email field is required"],
        trim: true,
        unique: true,
    },

    role: {
        type: String,
        validate: {
            validator: function (status) {
                return rolesEnum.includes(status)
            },
            message: (props) =>  `${props.value} is not a valid role`
        },
        enum: rolesEnum, // Validador nativo de mongoose
        required: [true, "role field is required"],
    },

})

//Encriptamos password antes de guardarla
userSchema.pre("save", function (next) {
    this.password = bcrypt.hashSync(this.password, 10)
    //next permite ir al proximo paso
    next()
})

//El nombre del modelo pasa a minusculas y plural en la db Product (model) -> products (collection)
//Podemos añadir un tercer argumento para especificar el nombre de la coleccion

export default model("user", userSchema);
