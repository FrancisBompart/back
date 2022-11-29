import mysql from "mysql"

const pool = mysql.createConnection({
    host: 'localhost',
    database: 'cerezas',
    user: 'root',
    password: 'fransbompart'
})

export default pool