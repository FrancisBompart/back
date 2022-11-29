import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors'
import { lugarRouter } from './routers/lugarRouter.js';
import { variedadRouter } from './routers/variedadRouter.js';
import { progApaRouter } from './routers/progApaRouter.js';
import { empresasRouters } from './routers/empresasRouters.js';

const app = express();

//settings
app.set('port',3001)

//middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json({ type : 'application/json' }))

//incorporar rutas
app.use('/api/lugar', lugarRouter)
app.use('/api/variedad', variedadRouter)
app.use('/api/empresas', empresasRouters)
app.use('/api/apadrinamientos', progApaRouter)

export default app