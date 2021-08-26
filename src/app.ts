import express from 'express'
import { router } from './routes'

const app = express()

//criando o parser 
app.use(express.json())
//usando rotas 
app.use(router)

export { app }