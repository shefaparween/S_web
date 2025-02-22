const sql = require('mssql');
const dotenv = require('dotenv');
dotenv.config();

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: true, // For Azure SQL
    trustServerCertificate: true, // For self-signed certificates
  },
};

const db = new sql.ConnectionPool(config);

db.connect()
  .then(() => {
    console.log('Connected to SQL Server database');
  })
  .catch((err) => {
    console.error('Error connecting to SQL Server:', err);
  });

module.exports = db;