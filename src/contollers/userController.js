//Importar que el modelo
import User from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    console.log(users.length);
    if (users.length === 0) {
      return res.status(204).json({ message: "There are no users" });
    }
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export const createUser = async (req, res) => {
  try {
    const userData = new User(req.body);
    const { email } = userData;
    const userFound = await User.findOne({ email });
    if (userFound) {
      return res
        .status(400)
        .json({ message: `user with email: ${email} already exists` });
    }
    //guardamos el usuario
    await userData.save();
    return res.status(201).json({ message: "User created" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error });
  }
};

export const validate = async (req, res) => {
    try{
        //Valido que me lleguen los dos campos
        if(!(req.body.email && req.body.password)){
            return res.status(400).json({ message: "There's a missing field" })
        }

        //valido que el usuario exista ya que email es unique
        const userFound = await User.findOne({ email: req.body.email })

        //si el usuario no existe terminamos la operacion
        if(!userFound){
            return res.status(400).json({ message: "User or password is incorrect" })
        }

        console.log({userFound})
        //Validar la password
        //Para comparar necesito la password que me llega por request y
        //la password del user en la db
        if(bcrypt.compareSync(req.body.password, userFound.password)){
            //Payload es la informacion que le cargamos al token
            const payload = {
                userId: userFound._id,
                userEmail: userFound.email
            }
            //El token para ser valido debe ser firmado
            //1. payload, 2. secret, 3. duracion
            const token = jwt.sign(payload, "secret", {expiresIn: "1h"})
            const role = userFound.role;
            return res.status(200).json({ message: "Logged in", token, role, user: {id: userFound._id, email: userFound.email} })
        } else {
            return res.status(400).json({message: "user or password are incorrect"})
        }
    } catch(error) {
        return res.status(500).json({ error: 'internal server error', error })
    }
}