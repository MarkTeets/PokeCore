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
import { ENDPOINT_VALUES, EndpointValue } from '../../utils/pokeApi/constants';
const cacheFileMaxDays = 30;

// Helper function: createErr will return an object formatted for the global error handler
import controllerErrorMaker from '../../utils/controllerErrorMaker';
const createErr: CustomErrorGenerator = controllerErrorMaker('pokeApiController');

const checkEndpointBase: RequestHandler = async (req, res, next) => {
  console.log('req.body:');
  console.log(req.body);

  const endpoint = req.body.endpoint;
  console.log('endpoint:', endpoint, '; type:', typeof endpoint);

  if (endpoint === undefined) {
    return next(
      createErr({
        method: 'checkEndpointBase',
        overview: 'Request body lacked data for required fields',
        status: 404,
        err: `The request body requires both an endpoint.`
      })
    );
  }

  if (!ENDPOINT_VALUES.has(endpoint)) {
    return next(
      createErr({
        method: 'checkEndpointBase',
        overview: 'Bad endpoint',
        status: 404,
        err: `The provided endpoint ${endpoint} is not one included in the PokeApi`
      })
    );
  }
  return next();
};

const createResourceEndpoint: RequestHandler = async (req, res, next) => {
  console.log('req.body:');
  console.log(req.body);

  const endpoint = req.body.endpoint as EndpointValue;
  const id = req.body.id;
  console.log('id:', id, '; type:', typeof id);

  if (id === undefined) {
    return next(
      createErr({
        method: 'createResourceEndpoint',
        overview: 'Request body lacked data for required fields',
        status: 404,
        err: `The request body requires an id.`
      })
    );
  }

  let endUrl = '';
  if (endpoint === 'pokemon/:id/encounters') {
    endUrl = endpoint.replace(':id', id);
  } else {
    endUrl = endpoint.concat('/', id);
  }
  res.locals.endUrl = endUrl;
  return next();
};

const createResourceListEndpoint: RequestHandler = async (req, res, next) => {
  console.log('req.body:');
  console.log(req.body);

  const endpoint = req.body.endpoint as EndpointValue;
  console.log('endpoint:', endpoint, '; type:', typeof endpoint);
  const offset = req.body.offset ? req.body.offset : 0;
  console.log('offset:', offset, '; type:', typeof offset);
  const limit = req.body.limit ? req.body.limit : 3000;
  console.log('limit:', limit, '; type:', typeof limit);

  const endUrl = endpoint.concat(`?offset=${offset}&limit=${limit}`);

  res.locals.endUrl = endUrl;
  return next();
};

const fetchPokeApiJsonData: RequestHandler = async (req, res, next) => {
  try {
    const baseUrl = BASE_URL.JSON;
    const endUrl = res.locals.endUrl as string;
    const fullUrl = baseUrl + endUrl;
    // console.log('fullUrl:', fullUrl);
    // Create the path to the local cache file
    const localCachePath = path.resolve(__dirname, '../localCache/' + fullUrl + '.json');
    console.log('localCachePath', localCachePath);

    // Check to see if the file already exists in the localCache
    const dataExists = fs.existsSync(localCachePath);
    // Return the data if it exists in the cache already
    if (dataExists) {
      const stats = fs.statSync(localCachePath);
      const now = new Date();
      const lastModifiedTime = new Date(stats.mtime);
      const ageInDays = (now.getTime() - lastModifiedTime.getTime()) / (1000 * 60 * 60 * 24);
      // console.log('ageInDays:', ageInDays);

      if (ageInDays > cacheFileMaxDays) {
        // File is older than the max days, delete it
        fs.unlinkSync(localCachePath);
        // console.log('Cache file deleted because it was older than 30 days');
      } else {
        // File is fresh enough, use cached data
        res.locals.frontendData = JSON.parse(fs.readFileSync(localCachePath, 'utf8'));
        console.log('Data retrieved from cache');
        return next();
      }
    }

    // Fetch the new data from the api and store it
    const webUrl = 'https://' + fullUrl;
    const response = await fetch(webUrl);

    if (!response.ok) {
      console.log('Bad status response:', response);
      return;
    }

    res.locals.frontendData = await response.json();
    console.log('data retrieved from api');

    // console.log('Response data:', data);

    // Make the directory(ies) for the local cache
    let pathStart = path.resolve(__dirname, '../localCache/');
    // console.log('fullUrl', fullUrl);
    // console.log('pathStart', pathStart);
    const dirs = fullUrl.split('/').slice(0, -1);
    // console.log('dirs', dirs);
    for (let i = 0; i < dirs.length; i++) {
      const nextPath = pathStart + '/' + dirs[i];
      // console.log('nextPath', nextPath);
      if (!fs.existsSync(nextPath)) {
        // console.log("path doesn't exist to:", dirs[i]);
        fs.mkdirSync(nextPath);
        // console.log('made dir', nextPath);
      }
      pathStart = nextPath;
    }

    // Write file to local cache
    fs.writeFile(localCachePath, JSON.stringify(res.locals.frontendData), 'utf8', function (err) {
      if (err) {
        console.log('Failed to write file', err);
      }
    });
    return next();
  } catch (err) {
    //console.log(err);
    return next(
      createErr({
        method: 'getResourceList',
        overview: 'General error',
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

const pokeApiController = {
  checkEndpointBase,
  createResourceEndpoint,
  createResourceListEndpoint,
  fetchPokeApiJsonData,
  pngFetch
};

export default pokeApiController;
