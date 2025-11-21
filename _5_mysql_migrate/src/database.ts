import dotenv from 'dotenv';
import knex from 'knex';

dotenv.config();

const connection = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  multipleStatements: true
}

export const database = knex(
  {
    client: "mysql2",
    connection: connection,
    pool: { min: 0, max: 10 }
  }
);


