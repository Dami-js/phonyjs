import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'phony',
  password: 'mypass',
  port: 5432,
});
