import pool from "../../../database/database.js"
import selectQuery from "../../../utils/selectQuery.js"

const prodAnualGet = (req, res) => {
    const {id_prod} = req.body

    const condicion = " WHERE c.id_prod = " + id_prod + " AND c.id_crz = v.id"

    selectQuery("v.nombre, v.id, c.id, c.calibre", "variedadescrz v, cultivos c", condicion, '', (err, result) => {
        if (err)
            res.status(500).send(err)
        res.json(result)
    })
}

const prodAnualPost = (req, res) => {
    const {id_prod, id_crz, id_cult, anio, prod_log} = req.body

    const valores = "("+id_prod + ", " + id_crz + ", " + id_cult + ", " + anio + ", " + prod_log + ")"

    pool.query('INSERT INTO produccionesanuales (id_prod, id_crz, id_cult, anio, prod_log) VALUES '+ valores, (err, result) => {
        if (err)
            res.status(500).send(err)
        res.json(result)    
    })
}

export const prodAnualController = {
    prodAnualGet, prodAnualPost
}