const graphql = require('graphql');
const pgPromise = require('pg-promise');
import dotenv from ('dotenv');
dotenv.config();

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB}/${process.env.DB_USER}`;
console.log(process.env.DB);
const db = {};
const psql = pgPromise(connectionString);

exports.psql = psql;