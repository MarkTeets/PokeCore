import { ResourceKey, ENDPOINT_MAP } from '../constants';
import { ResourceResponsePackage } from '../../../types';
import { NamedAPIResourceList } from '../models';
import { pokeApiCache } from '../pokeApiCache';

const createResourceListResponsePackage = (): ResourceResponsePackage<NamedAPIResourceList> => {
  return {
    status: 'IDLE',
    data: null,
    error: null
  };
};

export const getResourceList = async <E extends ResourceKey>(
  endpoint: E,
  offset: string | number = 0,
  limit: string | number = 3000
): Promise<ResourceResponsePackage<NamedAPIResourceList>> => {
  const result = createResourceListResponsePackage();

  // Retrieve from cache if there
  if (
    Object.hasOwn(pokeApiCache[endpoint], 'resourceList') &&
    !!pokeApiCache[endpoint].resourceList
  ) {
    result.data = pokeApiCache[endpoint].resourceList;
    result.status = 'SUCCESS';
    console.log('Response data from cache:', result.data);
    return result;
  }

  // Retrieve from pokeAPI if wasn't in cache
  const response = await fetch('/api/pokeApi2/getResourceList', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      endpoint: ENDPOINT_MAP[endpoint],
      offset,
      limit
    })
  });

  result.status = 'LOADING';

  if (response.ok) {
    result.data = await response.json();
    pokeApiCache[endpoint].resourceList = result.data;
    result.status = 'SUCCESS';
    console.log('Response data from backend:', result.data);
  } else {
    console.log('getResourceList failure');
    result.status = 'FAILED';
    // Replace with extracted message on error. Look up how to do this
    //result.error = JSON.parse(response.text);
  }

  return result;
};
