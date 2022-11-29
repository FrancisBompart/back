import { Router } from "express"
import { clienteController } from "../../controllers/empresasController/cliente.js"

const router = Router()

router.get('/registro', clienteController.ciudadesGet)
router.post('/registro', clienteController.empresasClientePost)

export const clienteRouter = router