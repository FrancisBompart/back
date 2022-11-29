import insertQuery from "../../utils/insertQuery.js"
import selectQuery from "../../utils/selectQuery.js"

const asociacionesRegGet = (req, res) => {
    selectQuery("r.id_pais, r.id, r.nombre", "regiones r", '', '', (err, result) => {
        if (err)
            res.status(500).send(err)
        res.json(result)
    })
}

const asociacionesRegPost = (req, res) => {
    const {id_pais, id_reg, nombre} = req.body
    const valores = id_pais + ", " + id_reg + ", " + nombre
    insertQuery('asociacionesregionales', '', " (id, id_pais, id_reg, nombre)", valores, (err, result) => {
        if (err)
            res.status(500).send(err)
        res.json(result)
    })
}

export const asocRegController = {
    asociacionesRegGet, asociacionesRegPost
}