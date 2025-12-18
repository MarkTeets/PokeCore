// Utils
import { getResourceByNameOrId } from './getResourceByNameOrId';
import { getResourceList } from './getResourceList';
import { pokeApiCache } from '../pokeApiCache';

// Types
import { ResourceKey } from '../constants';

export const getEntireResource = async (resourceKey: ResourceKey): Promise<void> => {
  //: Promise<ResourceResponsePackage<EndpointTypeMap[ResourceKey]>>
  const resourceListResponse = await getResourceList(resourceKey);
  if (resourceListResponse.status !== 'SUCCESS' || resourceListResponse.data === null) {
    console.log(
      'Failure procuring data via "getResourceList" in "getEntireResource" for resourceKey: ',
      resourceKey
    );
    console.log('resourceListResponse.status:', resourceListResponse.status);
    console.log('resourceListResponse.data:', resourceListResponse.data);
    return;
  }

  const resourceList = resourceListResponse.data.results;
  for (const resource of resourceList) {
    const urlStrings = resource.url.split('/');
    const id = urlStrings[urlStrings.length - 2];

    const resourceResponse = await getResourceByNameOrId(resourceKey, id);
    if (resourceResponse.status !== 'SUCCESS' || resourceResponse.data === null) {
      console.log(
        'Failure procuring data via "getResourceByNameOrId" in "getEntireResource" for resourceKey: ',
        resourceKey,
        ' id: ',
        id
      );
      console.log('resourceResponse.status:', resourceResponse.status);
      console.log('resourceResponse.data:', resourceResponse.data);
      return;
    }
  }
  console.log(pokeApiCache);
};
