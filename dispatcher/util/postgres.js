const { Pool } = require('pg');

const pool = new Pool({
  user: 'hengda',
  host: '192.168.1.244',
  database: 'hengda',
  password: '',
  port: 5432,
});

module.exports = pool;
