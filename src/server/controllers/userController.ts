// Database connection
import dbQuery from '../databaseConnect';

// Types
import { RequestHandler } from 'express';
import { WelcomeResponse } from '../../types';
import { CustomErrorGenerator } from '../backendTypes';

// Helper function: createErr will return an object formatted for the global error handler
import controllerErrorMaker from '../../utils/controllerErrorMaker';
const createErr: CustomErrorGenerator = controllerErrorMaker('userController');

// const pool = new Pool(sqlConfig);
// const db = { query: pool.query.bind(pool) };

// Get user list
const getUserList: RequestHandler = async (req, res, next) => {
  //console.log('starting getUserList');
  try {
    const queryString = 'SELECT * FROM trainer.identity';
    const data = await dbQuery(queryString);
    //console.log('executed query');
    //console.log('data:', data);
    if (data.rows[0] === undefined) {
      console.log('No results returned from SQL');
      return next();
    }

    res.locals.frontendData = {
      status: 'valid',
      userList: data.rows
    } as WelcomeResponse;

    return next();
  } catch (err) {
    //console.log(err);
    return next(
      createErr({
        method: 'getUserList',
        overview: 'problem retrieving userList from database',
        status: 500,
        err
      })
    );
  }
};

const userController = { getUserList };

export default userController;
