import insertQuery from "../../utils/insertQuery.js"
import selectQuery from "../../utils/selectQuery.js"

const ciudadesGet = (req, res) => {
    selectQuery("c.id_pais, c.id, c.nombre", "ciudades c", '', '', (err, result) => {
        if (err)
            res.status(500).send(err)
        res.json(result)
    })
}

const empresasClientePost = (req, res) => {
    const {nombre, direc, t_negocio, rgo_inf, rgo_sup, prt_acep, id_pais, id_cdad} = req.body
    
    const valores = "'" + nombre + "', '" + direc + "', '" + t_negocio + "', " + rgo_inf + ", " + rgo_sup + ", " + prt_acep + ", " + id_pais + ", " + id_cdad 
    
    insertQuery('empresascliente', '', " (id, nombre, direc, t_negocio, rgo_inf, rgo_sup, prt_acep, id_pais, id_cdad)", valores, (err, result) => {
        if (err)
            res.status(500).send(err)
        res.json(result)
    })
}

export const clienteController = {
    ciudadesGet, empresasClientePost
}