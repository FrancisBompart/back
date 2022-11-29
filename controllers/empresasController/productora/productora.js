import insertQuery from "../../../utils/insertQuery.js";
import selectQuery from "../../../utils/selectQuery.js"

const productoraRegGet = (req, res) => { 
    selectQuery("r.id_pais, r.id, r.nombre", "regiones r", '', '', (err, result) => {
        if (err)
            res.status(500).send(err)
        res.json(result)
    })
}

const productoraAsocRegGet = (req, res) => {
    selectQuery("a.id, a.nombre", "asociacionesregionales a", '', '', (err, result) => {
        if (err)
            res.status(500).send(err)
        res.json(result)
    }) 
}

const productoraCoopGet = (req, res) => {
    selectQuery("e.id, e.nombre", "empresasproductoras e", '', '', (err, result) => {
        if (err)
            res.status(500).send(err)
        res.json(result)
    }) 
}

const productoraPost = (req, res) => {
    const {id_pais, id_reg, nombre, tipo, direc, envase, id_asoc, id_coop} = req.body

    const valores = id_pais + ", "+ id_reg + ", '" + nombre + "', '" + tipo + "', '" + direc + "', '" + envase + "'"
    const columnas = " (id, id_pais, id_reg, nombre, tipo, direc, envase"

    if (id_asoc != ''){
        valores+= ", " + id_asoc
        columnas+= columnas + ", id_asoc"
    }
    if (id_coop != ''){
        valores+= ", "+ id_coop
        columnas+= columnas + ", id_coop"
    }

    insertQuery('empresasproductoras', '', columnas + ") ", valores, (err, result) => {
        if (err)
            res.status(500).send(err)
        res.json(result)
    })
}

export const prodController = {
    productoraRegGet, productoraPost, productoraAsocRegGet, productoraCoopGet, 
    productoraPost
}