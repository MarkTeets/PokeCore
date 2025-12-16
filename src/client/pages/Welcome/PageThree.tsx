// Packages
import React, { useState } from 'react';

// Utils
import { EndpointTypeMap } from '../../../utils/pokeApi/constants';
import { getResourceByNameOrId } from '../../../utils/pokeApi/fetchers/getResourceByNameOrId';
import { ResourceResponsePackage } from '../../../types';
//import { getTypeList, PokeTypes } from '../../../utils/classes/PokeTypes';
import { RESOURCE_KEY_MAP } from '../../../utils/pokeApi/constants';

// Main component
const PageThree = () => {
  const [data, setData] = useState<string | null>(null);

  const handleClick = async () => {
    const response = (await getResourceByNameOrId(RESOURCE_KEY_MAP.TYPE, 10)) as ResourceResponsePackage<
      EndpointTypeMap['TYPE']
    >;
    if (response.data !== null) {
      setData(response.data.name);
      console.log(response);
    } else {
      setData('Connection to backend failed');
      // console.log('fail');
    }
  };

  /*
  const handleClick2 = async () => {
    const typeList = await getTypeList();
    const types = new PokeTypes(typeList);
    setData(types.getType('fire').name);
  }
*/
  const handleClick3 = async () => {
    const response = (await getResourceByNameOrId(RESOURCE_KEY_MAP.POKEMON, 10)) as ResourceResponsePackage<
      EndpointTypeMap['POKEMON']
    >;
    if (response.data !== null) {
      setData(response.data.name);
      console.log(response);
    } else {
      setData('Connection to backend failed');
      // console.log('fail');
    }
  };

  return (
    <div className='page-three'>
      <h1>This is page three</h1>
      <button onClick={handleClick3}>Click to retrieve data</button>
      <div>{data}</div>
      <img src='/api/pokeApi/png/pokemon/4' alt='Fetched PNG' />
    </div>
  );
};

export default PageThree;
