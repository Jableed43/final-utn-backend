import { Router } from 'express'
import { createCategory, getCategories } from '../contollers/categoryController.js'

const categoryRoute = Router()

categoryRoute.get("/get", getCategories)
categoryRoute.post("/create", createCategory)

export default categoryRoute;