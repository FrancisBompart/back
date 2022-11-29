import selectQuery from "../../../utils/selectQuery.js"

const beneficiosGet = (req, res) => {
    const {id_prove} = req.body

    const condicion = " WHERE id_prove = " + id_prove + " AND vigencia = 'Activo'"

    selectQuery("id", " convenios", condicion, '', (err, result) => {
        if (err)
            res.status(500).send(err)
        res.json(result)
    })
}

const beneficiosPost = (req, res) => {
    const {id_prove, id_conv, nombre, precio, descrip} = req.body

    const condicion = " WHERE id_prove = " + id_prove + " AND id_conv = " + id_conv

    let valores = id_prove + ", " + id_conv + ", '" + nombre + "', " + precio
    let columnas = ''

    if (descrip == ''){
        valores = valores + ")"
        columnas = " (id, id_prove, id_conv, nombre, precio) "
    }
    else{
        valores = valores + ", '" + descrip + "')"
        columnas = " (id, id_prove, id_conv, nombre, precio, descrip) "
    }
    
    insertQuery('beneficios', condicion, columnas, valores, (err, result) => {
        if (err)
            res.status(500).send(err)
        res.json(result)
    })
}

const proveedorGet = (req, res) => {
    selectQuery("p.id, p.nombre", "proveedores p", '', '', (err, result) => {
        if (err)
            res.status(500).send(err)
        res.json(result)
    })
}

const asociacionRegGet = (req, res) => {
    selectQuery("a.id, a.nombre", "asociacionesregionales a", '', '', (err, result) => {
        if (err)
            res.status(500).send(err)
        res.json(result)
    }) 
}

const catalogoProdPost = (req, res) => {
    const {id_prov} = req.body
    const condicion = " WHERE id_prove = " + id_prov + " AND c.id_prod = p.id"
    selectQuery("c.id_prod, p.nombre", "catalogoproveedores c, empresasproductoras p", condicion, '', (err, result) => {
        if (err)
            res.status(500).json(err)
        res.json(result)
    })
}

const convenioPost = (req, res) => {
    const {id_prove, columna, valor} = req.body
    
    const condicion = " WHERE id_prove = " + id_prove

    let valores = id_prove + ", CURDATE(), 'Activo', " + valor
    let columnas = '(id, id_prove, fe_emision, vigencia, '

    if (columna == 'id_cat_prod'){
        valores = valores + ", " + id_prove 
        columnas = columnas + 'id_cat_prod, id_cat_prove)'
    }
    else
        columnas = columnas + 'id_asoc)'
    
    insertQuery('convenios', condicion, columnas , valores, (err, result) => {
        if (err)
            res.status(500).send(err)
        res.json(result)
    })
}

const cancelarConvenioGet = (req, res) => {
    const {id_prove, valor, columna} = req.body
    const condicion = "WHERE id_prove = "+ id_prove + " AND " + columna + " = " + valor
    selectQuery("id", "convenios", condicion, '', (err, result) => {
        if (err)
            res.send.status(500).json(err)
        res.send.json(result)
    })
}

const cancelarConvenioPost = (req, res) => {
    const {id_prove, valor, columna} = req.body    
    pool.query("UPDATE convenios SET vigencia = 'Vencido' WHERE id_prove = " + id_prove + " AND " + columna + " = " + valor, (err, result) => {
        if (err)
            res.status(500).send(err)
        res.json(result)
    })
}

export const convenioController = {
    proveedorGet, catalogoProdPost, asociacionRegGet, convenioPost, cancelarConvenioGet, cancelarConvenioPost, beneficiosGet, beneficiosPost
}
