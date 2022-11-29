import selectQuery from "../../../utils/selectQuery.js"

const proveedorGet = (req, res) => {
    let regiones = []
    let ramasNeg = []

    selectQuery("c.id_pais, c.id, c.nombre", "ciudades c", '', '',(err, result) => { 
        if (err)
            res.status(500).send(err)
        regiones = result

        selectQuery("id, nombre", "ramasnegocio", '', '',(err, result) => {
            if (err)
                res.status(500).send(err)
            ramasNeg = result
        })

        res.json({regiones, ramasNeg})
    })    
}

const proveedorPost = (req, res) => {
    const {rama_neg, id_pais, id_cdad, nombre, direc} = req.body

    const valores = rama_neg + ", " + id_pais + ", " + id_cdad + ", '" + nombre + "', '" + direc + "'"

    insertQuery('proveedores', '', " (id, rama_neg, id_pais, id_cdad, nombre, direc)", valores, (err, result) => {
        if (err)
            res.status(500).send(err)
        res.json(result)
    })
}

const ramaNegocioPost = (req, res) => {
    const {nombre} = req.body
    const valores = "'" + nombre + "'"

    insertQuery('ramasnegocio', '', " (id, nombre)", valores, (err, result) => {
        if (err)
            res.status(500).send(err)
        res.json(result)
    })
}

export const proveedorController = {
    proveedorGet, proveedorPost, ramaNegocioPost
}