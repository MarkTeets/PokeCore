import { ENDPOINT_MAP, EndpointKey, EndpointTypeMap } from '../constants';

export const getResourceList = async <E extends EndpointKey>(
  endpoint: E,
  offset: string | number = 0,
  limit: string | number = 3000
) => {
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
  if (response.ok) {
    const res = (await response.json()) as EndpointTypeMap[E];
    console.log('Response data:', res);
    return res;
  } else {
    console.log('getResourceList failure');
    return {};
  }
};
