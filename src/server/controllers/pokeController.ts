// Packages
import * as fs from 'fs';
import * as path from 'path';

// Database connection
// import dbQuery from '../databaseConnect';

// Types
import { RequestHandler } from 'express';
import { CustomErrorGenerator } from '../backendTypes';

// Constants
import { BASE_URL } from '../../utils/pokeApi/constants';
//const baseUrl = BASE_URL.REST;

// Helper function: createErr will return an object formatted for the global error handler
import controllerErrorMaker from '../../utils/controllerErrorMaker';
const createErr: CustomErrorGenerator = controllerErrorMaker('pokeController');

const pokeFetch: RequestHandler = async (req, res, next) => {
  try {
    // All urls will start with 'pokeapi.co/api/v2'
    // the part attached to this url will just have the end, like 'types'
    // Every unique endpoint/result will have its own unique result
    console.log('req.params:');
    console.log(req.params);

    const param1 = req.params.param1;
    const param2 = req.params.param2 ? '/'.concat(req.params.param2) : '';
    const param3 = req.params.param3 ? '/'.concat(req.params.param3) : '';

    const url = param1.concat(param2, param3);
    const baseUrl = 'pokeapi.co/api/v2/';
    const cleanUrl = url.charAt(url.length - 1) === '/' ? url.substring(0, url.length - 1) : url;
    const fullUrl = baseUrl + cleanUrl;
    // console.log('fullUrl:', fullUrl);
    // Create the path to the local cache file
    const localCachePath = path.resolve(__dirname, '../localCache/' + fullUrl + '.json');
    //console.log('localCachePath', localCachePath);

    res.locals.frontendData = {
      status: '',
      pokeData: {}
    };

    // Check to see if the file already exists in the localCache
    const dataExists = fs.existsSync(localCachePath);
    // Return the data if it exists in the cache already
    if (dataExists) {
      res.locals.frontendData.status = 'valid';
      res.locals.frontendData.pokeData = JSON.parse(fs.readFileSync(localCachePath, 'utf8'));
      console.log('Data retrieved from cache');
      return next();
    }

    // Fetch the new data from the api and store it
    const webUrl = 'https://' + fullUrl;
    const response = await fetch(webUrl);

    if (!response.ok) {
      console.log('Bad status response:', response);
      return;
    }

    res.locals.frontendData.status = 'valid';
    res.locals.frontendData.pokeData = await response.json();
    console.log('data retrieved from api');

    // console.log('Response data:', data);

    // Make the directory(ies) for the local cache
    let pathStart = path.resolve(__dirname, '../localCache/' + baseUrl);
    //console.log('pathStart', pathStart);
    const dirs = cleanUrl.split('/').slice(0, -1);
    for (let i = 0; i < dirs.length; i++) {
      const nextPath = pathStart + '/' + dirs[i];
      // console.log('nextPath', nextPath);
      if (!fs.existsSync(nextPath)) {
        // console.log("path doesn't exist to:", dirs[i]);
        fs.mkdirSync(nextPath);
      }
      pathStart = nextPath;
    }

    // Write file to local cache
    fs.writeFile(
      localCachePath,
      JSON.stringify(res.locals.frontendData.data),
      'utf8',
      function (err) {
        if (err) {
          console.log('Failed to write file', err);
        }
      }
    );
    return next();
  } catch (err) {
    //console.log(err);
    return next(
      createErr({
        method: 'pokeFetch',
        overview: 'Problem retrieving data',
        status: 500,
        err
      })
    );
  }
};

const pngFetch: RequestHandler = async (req, res, next) => {
  try {
    console.log('req.params:');
    console.log(req.params);

    const param1 = req.params.param1;
    const param2 = req.params.param2 ? '/'.concat(req.params.param2) : '';
    const param3 = req.params.param3 ? '/'.concat(req.params.param3) : '';

    const url = param1.concat(param2, param3);
    const baseUrl = 'raw.githubusercontent.com/PokeAPI/sprites/master/sprites/';
    const fullUrl = baseUrl + url + '.png';
    console.log('fullUrl:', fullUrl);

    // Create the path to the local cache file
    const localCachePath = path.resolve(__dirname, '../localCache/' + fullUrl);
    //console.log('localCachePath', localCachePath);

    res.locals.frontendData = {
      source: '',
      localCachePath
    };

    const dataExists = fs.existsSync(localCachePath);
    // Return the data if it exists in the cache already
    if (dataExists) {
      console.log('Data retrieved from cache');
      return next();
    }

    // Fetch the new data from the api and store it
    const webUrl = 'https://' + fullUrl;
    //console.log('webUrl', webUrl);
    const response = await fetch(webUrl);

    if (!response.ok) {
      console.log('Bad status response:', response);
      return;
    } else {
      console.log('successful fetch');
    }

    // Retrieve the response data as an ArrayBuffer
    const arrayBuffer = await response.arrayBuffer();

    // Convert the ArrayBuffer to a Node.js Buffer
    const data = Buffer.from(arrayBuffer);

    // Make the directory(ies) for the local cache
    let pathStart = path.resolve(__dirname, '../localCache/' + baseUrl);
    //console.log('pathStart', pathStart);
    const dirs = url.split('/').slice(0, -1);
    //console.log('dirs:', dirs);
    for (let i = 0; i < dirs.length; i++) {
      const nextPath = pathStart + '/' + dirs[i];
      //console.log('nextPath', nextPath);
      if (!fs.existsSync(nextPath)) {
        //console.log("path doesn't exist to:", dirs[i]);
        fs.mkdirSync(nextPath);
      }
      pathStart = nextPath;
    }

    // Write the Buffer to a file without any encoding (raw binary data)
    fs.writeFileSync(localCachePath, data as unknown as NodeJS.ArrayBufferView);
    console.log('data retrieved from api');
    return next();
  } catch (err) {
    //console.log(err);
    return next(
      createErr({
        method: 'pokeFetch',
        overview: 'Problem retrieving data',
        status: 500,
        err
      })
    );
  }
};

const pokeController = { pokeFetch, pngFetch };

export default pokeController;
