//to use pg in es modules import the main module of pg
import pkg from "pg";
// import Pool from pg package
const { Pool } = pkg;
// now we can add our connectionstring from env file
// instead of our real string with our password
// const connectionString = 'postgresql://dbuser:secretpassword@database.server.com:3211/mydb'

const connectionString = process.env.PG_CONNECTIONSTRING;

const pool = new Pool({
  connectionString,
});

export default pool;
