const mysql = require('mysql2/promise');
const env = require('./env');

const pool = mysql.createPool({
  host: env.db_host,
  port: env.db_port,
  user: env.db_user,
  password: env.db_password,
  database: env.db_database,
  waitForConnections: true,
    connectionLimit: 10,
});

module.exports = pool;
