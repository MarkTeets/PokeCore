// NONE OF THE REQUIRED PACKAGES ARE IN THE PACKAGE JSON FOR BOILERPLATE

/* Sample Postgres database connection -------------------------------------------------------------

import { Pool } from 'pg';

const PG_URI = 'postgres://...';
// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
export default {
  query: (text, params, callback) => {
    // console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
*/

/* Sample for MongoDB database ---------------------------------------------------------------------

import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://...';

mongoose
  .connect(MONGO_URI, {
    dbName: 'sudoku'
  })
  .then(() => console.log('Connected to Mongo DB!'))
  .catch((err) => console.log('Database error: ', err.message));

const Schema = mongoose.Schema;

const puzzleSchema = new Schema({
  number: Number,
  puzzle: String,
  solution: String,
  difficulty: Number,
  solvable_level: {
    type: Schema.Types.ObjectId,
    ref: 'solveLevel'
  },
  unique_solution: Boolean
});

const Puzzle = mongoose.model('puzzles', puzzleSchema);

export default {
  Puzzle
};
*/
