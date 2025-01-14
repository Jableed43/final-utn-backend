import Category from "../models/categoryModel.js"

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        if(categories.length === 0){
            return res.status(204)
        }
        return res.status(200).json(categories)
    } catch (error) {
        return res.status(500).json({message: "Internal server error", error})
    }
}

export const createCategory = async (req, res) => {
    try {
        const { name } = req.body
       const categoryExist = await Category.findOne({ name })
       if(categoryExist){
        console.log(categoryExist)
        return res.status(400).json({ message: "Category already exists" })
       }
       const newCategory = new Category(req.body)
       const response = await newCategory.save()
       return res.status(201).json(response)
    } catch (error) {
        return res.status(500).json({message: "Internal server error", error})
    }
}