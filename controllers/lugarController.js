import insertQuery from "../utils/insertQuery.js"
import selectQuery from "../utils/selectQuery.js"

const ciudadregionGet = (req, res) => {
    
    selectQuery("id, nombre", "paises", '', '', (err, result) => { //PAISES
        if (err)
            res.status(500).send(err)
        res.json(result)
    })
}

const ciudadregionPost = (req, res) => {
    const {tabla, id_pais, nombre} = req.body

    const condicion = " WHERE id_pais = "+ id_pais

    const valores = id_pais + ", '"+ nombre + "'"
    insertQuery(tabla, condicion, ' (id, id_pais, nombre)', valores, (err, result) => {
        if (err)
            res.status(500).json(err)
        res.json(result)
    })
}

const paisPost = (req, res) => {
    const {nombre, continent} = req.body

    const valores = "'"+ nombre + "', '" + continent
     
    insertQuery('paises', '', ' (id, nombre, continent)', valores, (err, result) => {
        if (err)
            res.status(500).json(err)
        res.json(result)
    })
}

export const lugarController = {
    paisPost, ciudadregionPost, ciudadregionGet
}