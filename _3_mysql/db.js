const mysql = require('mysql2/promise')
const pool = mysql.createPool({
  host: 'db',
  user: 'user123',
  password: 'password123',
  database: 'db123',
  port: 3306
})

module.exports = pool