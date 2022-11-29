import { Router } from "express";
import { lugarController } from "../controllers/lugarController.js"

const router = Router()

router.get('/registrarCdadReg', lugarController.ciudadregionGet)
router.post('/registrarCdadReg', lugarController.ciudadregionPost)
router.post('/registrarPais', lugarController.paisPost)

export const lugarRouter = router