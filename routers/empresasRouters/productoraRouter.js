import { Router } from "express";
import { catalogoController } from "../../controllers/empresasController/productora/catalogoProv.js";
import { cultivosController } from "../../controllers/empresasController/productora/cultivo.js";
import { prodAnualController } from "../../controllers/empresasController/productora/prodAnual.js";
import { prodController } from "../../controllers/empresasController/productora/productora.js";

const router = Router()

router.get('/catalogoProveedores', catalogoController.catalogoGet)
router.post('/catalogoProveedores', catalogoController.catalogoPost)

router.get('/registrarCultivo', cultivosController.cultivosGet)
router.post('/registrarCultivo', cultivosController.cultivosPost)

router.get('/produccionAnual', prodAnualController.prodAnualGet)
router.post('/produccionAnual', prodAnualController.prodAnualPost)

router.get('/registro/regiones', prodController.productoraRegGet)
router.get('/registro/asocRegs', prodController.productoraAsocRegGet)
router.get('/registro/cooperativas', prodController.productoraCoopGet)
router.post('/registro', prodController.productoraPost)

export const productoraRouter = router
