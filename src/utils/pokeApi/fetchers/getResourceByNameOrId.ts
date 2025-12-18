import { ENDPOINT_MAP, ResourceKey, EndpointTypeMap } from '../constants';
import { ResourceResponsePackage } from '../../../types';
import { pokeApiCache } from '../pokeApiCache';

const createResourceResponsePackage = (): ResourceResponsePackage<EndpointTypeMap[ResourceKey]> => {
  return {
    status: 'IDLE',
    data: null,
    error: null
  };
};

export const getResourceByNameOrId = async (
  endpoint: ResourceKey,
  id: string | number
): Promise<ResourceResponsePackage<EndpointTypeMap[ResourceKey]>> => {
  const ID = id.toString();
  const result = createResourceResponsePackage();

  // Check cache and return if there
  if (Object.hasOwn(pokeApiCache[endpoint], ID) && !!pokeApiCache[endpoint][ID]) {
    result.data = pokeApiCache[endpoint][ID];
    result.status = 'SUCCESS';
    console.log('Response data from cache:', result.data);
    console.log('pokeApiCache:', pokeApiCache);
    return result;
  }

  // If not in the cache, fetch resource from pokeAPI and store on cache
  const response = await fetch('/api/pokeApi2/getResourceByNameOrId', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      endpoint: ENDPOINT_MAP[endpoint],
      id
    })
  });

  result.status = 'LOADING';

  if (response.ok) {
    result.data = await response.json();
    pokeApiCache[endpoint][ID] = result.data;
    result.status = 'SUCCESS';
    // console.log('Response data from backend:', result.data);
  } else {
    console.log('getResourceByNameOrId failure');
    result.status = 'FAILED';
    // Replace with extracted message on error. Look up how to do this
    //result.error = JSON.parse(response.text);
  }

  return result;
};

// I need to create a function that will take a endpoint type
// and then return a getter function that will be typed to specifically
// return Resource Response Packages tuned to that specific endpoint type

/*
export const createResourceGetter = (endpointType: ResourceKey) => {
  const getSpecifiedResource = async (
    endpoint: ResourceKey,
    id: string | number
  ): Promise<ResourceResponsePackage<EndpointTypeMap[endpointType]>> => {
    //console.log('');
  };
};
*/
/*
export const getResourceByNameOrId2 = async (
  endpoint: ResourceKey,
  id: string | number
): Promise<ResourceResponsePackage<EndpointTypeMap[ResourceKey]>> => {
  // Check cache and return if there
  const ID = id.toString();
  const result = createResourceResponsePackage();
  if (Object.hasOwn(pokeApiCache[endpoint], ID) && !!pokeApiCache[endpoint][ID]) {
    result.data = pokeApiCache[endpoint][ID];
    result.status = 'SUCCESS';
    console.log('Response data from cache:', result.data);
    console.log('pokeApiCache:', pokeApiCache);
  } else {
    // Else, Fetch resource and store on cache
    const response = await fetch('/api/pokeApi2/getResourceByNameOrId', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        endpoint: ENDPOINT_MAP[endpoint],
        id
      })
    });
    result.status = 'LOADING';
    if (response.ok) {
      result.data = await response.json();
      pokeApiCache[endpoint][ID] = result.data;
      result.status = 'SUCCESS';
      console.log('Response data from backend:', result.data);
    } else {
      console.log('getResourceByNameOrId failure');
      result.status = 'FAILED';
      // Replace with extracted message on error. Look up how to do this
      //result.error = JSON.parse(response.text);
    }
  }
  return result;
};
*/
