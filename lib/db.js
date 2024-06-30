import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'EhN_N6978',
  database: 'webpage_builder'
});

export async function query(sql, params) {
  const [results] = await pool.execute(sql, params);
  return results;
}
