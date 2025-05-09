import { ENDPOINT_MAP, EndpointKey, EndpointTypeMap } from '../constants';

export const getResourceByNameOrId = async <E extends EndpointKey>(
  endpoint: E,
  id: string | number
) => {
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
  if (response.ok) {
    const res = (await response.json()) as EndpointTypeMap[E];
    console.log('Response data:', res);
    return res;
  } else {
    console.log('getResourceByNameOrId failure');
    return {};
  }
};
