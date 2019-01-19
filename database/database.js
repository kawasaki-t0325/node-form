const mysql = require('mysql');
const env = require('dotenv');

env.config();

const config = {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DATABASE_PORT,
};

module.exports = mysql.createConnection(config);