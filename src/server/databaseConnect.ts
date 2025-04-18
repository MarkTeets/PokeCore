import { Pool } from 'pg';
import sqlConfig from '../utils/sqlConfig';

// create a new pool here using the connection string above
const pool = new Pool(sqlConfig);

// Export the query function to be used in controllers
export default pool.query.bind(pool);

/* For Testing
const queryString = 'SELECT * FROM trainer.identity';
(async () => {
  //const pool = new Pool(sqlConfig);
  //const client = await pool.connect();
  try {
    const result = await pool.query(queryString);
    console.log(result);
    console.log('hello from', result.rows[0]['username']);
  } catch (e) {
    console.error(e.message, e.stack);
  }
})();
//*/
