// Importando o módulo mysql/promise
const mysql = require('mysql2/promise');

//Configuração da pool de coexões com MySQL
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'app_eventos'
});

module.exports = pool;