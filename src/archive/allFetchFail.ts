/*
Typical pokemon sprite:

From pokemon/3.json
obj.sprites.front_default
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png


From type/3.json
Typical type sprite:
obj.sprites.generation-viii.sword-shield.name_icon
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-viii/sword-shield/3.png
*/

import * as fs from 'fs';
import * as path from 'path';

type ApiFileType = 'json' | 'png';

type FileTypeUrlDict = {
  json: string;
  png: string;
};

const pokeFetch = async (url: string, fileType: ApiFileType) => {
  // the part attached to this url will just have the end, like 'types'
  // Every unique endpoint/result will have its own unique result

  const fileTypeUrlDict: FileTypeUrlDict = {
    json: 'pokeapi.co/api/v2/',
    png: 'raw.githubusercontent.com/PokeAPI/sprites/master/sprites/'
  };

  const baseUrl = fileTypeUrlDict[fileType];
  const fullUrl = baseUrl + url; //+ '.' + fileType;

  // Create the path to the local cache file
  const localCachePath = path.resolve(__dirname, '../localCache/' + fullUrl);
  console.log('localCachePath', localCachePath);

  // data will hold what is returned to the user
  let data;
  // Check to see if the file already exists in the localCache
  const dataExists = fs.existsSync(localCachePath);
  // Return the data if it exists in the cache already
  if (dataExists) {
    data = fs.readFileSync(localCachePath);
    console.log('Data retrieved from cache');
    return data;
  }

  // Fetch the new data from the api and store it
  const webUrl = 'https://' + fullUrl;
  console.log('webUrl', webUrl);
  const response = await fetch(webUrl);

  if (!response.ok) {
    console.log('Bad status response:', response);
    return;
  } else {
    console.log('successful fetch');
  }

  if (fileType === 'png') {
    // Retrieve the response data as an ArrayBuffer
    const arrayBuffer = await response.arrayBuffer();

    // Convert the ArrayBuffer to a Node.js Buffer
    data = Buffer.from(arrayBuffer);
  }

  if (fileType === 'json') {
    data = await response.json();
  }

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
  fs.writeFile(localCachePath, data, function (err) {
    if (err) {
      console.log('Failed to write file', err);
    }
  });
  console.log('data retrieved from api');
  return data;
};

//* Testing
(async () => {
  try {
    const data = await pokeFetch('pokemon/3', 'json');
    console.log('data:', data);
  } catch (err) {
    console.error('Execution error:', err);
  }
})();
//*/

//export default pokeFetch;
