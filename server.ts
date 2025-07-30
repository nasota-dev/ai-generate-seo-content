import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import morgan from "morgan"
import routers from "./src/routes/routes"

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

app.use(routers)

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log(`Servidor está rodando na porta ${PORT}`)
})
