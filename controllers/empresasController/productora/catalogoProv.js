import pool from "../../../database/database.js";
import selectQuery from "../../../utils/selectQuery.js"

const catalogoGet = (req, res) => {
    let productoras = []
    let proveedores = []

    selectQuery("e.id, e.nombre", "empresasproductoras e", '', '', (err, result) => { //
        if (err)
            res.status(500).send(err)
        productoras = result

        selectQuery("p.id, p.nombre", "proveedores p", '', '', (err, result) => {
            if (err)
                res.status(500).send(err)
            proveedores = result

            res.json({productoras, proveedores})
        })
    })
}

const catalogoPost = (req, res) => {
    const {id_prod, id_prove} = req.body

    pool.query("INSERT INTO catalogoproveedores (id_prod, id_prove) VALUES (" + id_prod + ", " + id_prove + ")", (err, result) => {
        if (err)
            res.status(500).json(err)
        res.json(result)
    })
}

export const catalogoController = {
    catalogoGet, catalogoPost
}