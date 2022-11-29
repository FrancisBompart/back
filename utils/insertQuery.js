import pool from "../database/database.js"

let insertQuery = (tabla, condicion, columnas, valores, callback) => {
    pool.query("SELECT MAX(id) FROM " + tabla + condicion, (err, result) => {

    if (err) 
        callback(err, null)
        
    else{
        const id = result[0]['MAX(id)'] + 1
        
        pool.query("INSERT INTO " + tabla + columnas + " VALUES ("+ id + ", " + valores + ")", (err, result) => {
            if (err)
                callback(err, null)

            callback(null, result)
        })
    }
})}


export default insertQuery