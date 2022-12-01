import insertQuery from "../../../utils/insertQuery.js";
import selectQuery from "../../../utils/selectQuery.js"

const productoraRegGet = (req, res) => {  //******/
    selectQuery("r.id_pais, r.id, r.nombre", "regiones r", '', '', (err, result) => {
        if (err)
            res.status(500).send(err)
        else
            res.json(result)
    })
}

const productoraAsocRegGet = (req, res) => {
    const {id_pais, id_reg} = req.body
    selectQuery("a.id, a.nombre", "asociacionesregionales a", " WHERE id_reg = " + id_reg + " AND id_pais = " + id_pais, '', (err, result) => {
        if (err)
            res.status(500).send(err)
        else
            res.json(result)
    }) 
}

const productoraCoopGet = (req, res) => {
    selectQuery("e.id, e.nombre", "empresasproductoras e", " WHERE e.tipo = 'Cooperativa' ", '', (err, result) => {
        if (err)
            res.status(500).send(err)
        else
            res.json(result)
    }) 
}

const productoraPost = (req, res) => {
    const {id_pais, id_reg, nombre, tipo, direc, envase, id_asoc, id_coop} = req.body

    let valores = id_pais + ", "+ id_reg + ", '" + nombre + "', '" + tipo + "', '" + direc + "', '" + envase + "'"
    let columnas = " (id, id_pais, id_reg, nombre, tipo, direc, envase"

    if (id_asoc != ''){
        valores+= ", " + id_asoc
        columnas+= ", id_asoc"
    }
    if (id_coop != ''){
        valores+= ", "+ id_coop
        columnas+=  ", id_coop"
    }

    insertQuery('empresasproductoras', '', columnas + ") ", valores, (err, result) => {
        if (err)
            res.status(500).send(err)
        else
            res.json(result)
    })
}

export const prodController = {
    productoraRegGet, productoraPost, productoraAsocRegGet, productoraCoopGet, 
    productoraPost
}