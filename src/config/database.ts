import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const user = "postgres";
const password = process.env.POSTGRES_PASSWORD;
const host = "localhost";
const port = 5432;
const database = "kepper";

const { Pool } = pg;

const configDatabase = {
  user,
  password,
  host,
  port,
  database,
};

const connection = new Pool(configDatabase);
export default connection;