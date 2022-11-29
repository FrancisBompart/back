import insertQuery from "../../../utils/insertQuery.js"
import selectQuery from "../../../utils/selectQuery.js"

const cultivosGet = (req, res) => {
    let productoras = []
    let variedades = []

    selectQuery("e.id, e.nombre", "empresasproductoras e", '', '', (err, result) => { 
        if (err)
            res.status(500).send(err)
        productoras = result

        selectQuery("v.id, v.nombre", "variedadescrz v", '', '', (err, result) => {
            if (err)
                res.status(500).send(err)
            variedades = result

            res.json({productoras, variedades})
        })
    })
}

const cultivosPost = (req, res) => {
    const {id_prod, id_crz, calibre, disp_i, disp_f, prod_esp, max_dist_exp} = req.body

    const condicion = " WHERE id_prod = " + id_prod + " AND id_crz = " + id_crz

    const valores = id_prod + ", " + id_crz + ", '" + calibre + "', '" + disp_i + "', '" + disp_f + "', " + prod_esp + ", " + max_dist_exp 

    insertQuery('cultivos', condicion, ' (id, id_prod, id_crz, calibre, disp_i, disp_f, prod_esp, max_dist_exp)', valores, (err, result) => {
        if (err)
            res.status(500).send(err)
        res.json(result)
    })
}

export const cultivosController = {
    cultivosGet, cultivosPost
}