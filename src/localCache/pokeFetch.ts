/*
So essentially, I want requests to go through here before they go out to the api.

I'll make a new set of fetch requests that'll first check json to see if it exists in the json 
directory. 

I'll want to set it up so that the file directory reflects the structure of the calls 

So if I make a call to a new endpoint, it's first going to check here, check to see if there's a
file that exists already with that name, if so, checks to see if that result is there.

If it is, it'll source the information from there.
If it isn't, it'll grab the info from the api and write a new file here

*/

import * as fs from 'fs';
import * as path from 'path';

const pokeFetch = async (url: string) => {
  // All urls will start with 'pokeapi.co/api/v2'
  // the part attached to this url will just have the end, like 'types'
  // Every unique endpoint/result will have its own unique result
  const baseUrl = 'pokeapi.co/api/v2/';
  const fullUrl = baseUrl + url;

  // Create the path to the local cache file
  const jsonDBPath = path.resolve(__dirname, './' + fullUrl + '.json');
  //console.log('jsonDBPath', jsonDBPath);

  // data will hold what is returned to the user
  let data: string;
  // Check to see if the file already exists in the localCache
  const dataExists = fs.existsSync(jsonDBPath);
  // Return the data if it exists in the cache already
  if (dataExists) {
    data = JSON.parse(fs.readFileSync(jsonDBPath, 'utf8'));
    return data;
    //console.log('Data retrieved from cache');
  }

  // Fetch the new data from the api and store it
  const webUrl = 'https://' + fullUrl;
  const response = await fetch(webUrl);

  if (response.status !== 200) {
    console.log('Non 200 status response:', response);
    return;
  }

  data = await response.json();
  // console.log('Response data:', data);

  // Make the directory(ies) for the local cache
  let pathStart = path.resolve(__dirname, './' + baseUrl);
  //console.log('pathStart', pathStart);
  const dirs = url.split('/').slice(0, -1);
  for (let i = 0; i < dirs.length; i++) {
    const nextPath = pathStart + '/' + dirs[i];
    // console.log('nextPath', nextPath);
    if (!fs.existsSync(nextPath)) {
      //console.log("path doesn't exist to:", dirs[i]);
      fs.mkdirSync(nextPath);
    }
    pathStart = nextPath;
  }

  // Write file to local cache
  fs.writeFile(jsonDBPath, JSON.stringify(data), 'utf8', function (err) {
    if (err) {
      console.log('Failed to write file', err);
    }
  });

  return data;
};

// pokeFetch('types');
console.log(pokeFetch('pokemon/3'));
