const Pool = require("pg").Pool;
require("dotenv").config();

const devConfig = {
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
};

const proConfig = {
    connectionString: process.env.DATABASE_URL //heroku addons
}

const pool = new Pool ({
    connectionString : process.env.NODE_ENV === "production" ? proConfig : devConfig});

module.exports = pool;