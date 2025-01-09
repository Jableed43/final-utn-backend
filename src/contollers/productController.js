//Importar que el modelo
import Product from '../models/productModel.js'

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        console.log(products)
        console.log(products.length)
        if(products.length === 0){
           return res.status(204).json({ message: "There are no products" })
        }
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error })
    }
}