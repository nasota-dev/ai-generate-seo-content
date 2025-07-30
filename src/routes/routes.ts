import { Router } from "express"
import { generateSEO } from "../controllers/generateSEO"
import authKey from "../middleware/authkey"

const routers = Router()

routers.post('/generate-seo-content', authKey, generateSEO)

export default routers
