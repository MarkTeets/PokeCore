// Packages
import React, { useState } from 'react';

// Utils
import { EndpointTypeMap } from '../../../utils/pokeApi/constants';
import { getResourceByNameOrId } from '../../../utils/pokeApi/fetchers/getResourceByNameOrId';

// Main component
const PageThree = () => {
  const [data, setData] = useState<string | null>(null);

  const handleClick = async () => {
    const res = (await getResourceByNameOrId('TYPE', 10)) as EndpointTypeMap['TYPE'];
    if (res?.name !== undefined) {
      setData(res.name);
      console.log(res);
    } else {
      setData('Connection to backend failed');
      // console.log('fail');
    }
  };

  return (
    <div className='page-three'>
      <h1>This is page three</h1>
      <button onClick={handleClick}>Click to retrieve data</button>
      <div>{data}</div>
      <img src='/api/pokeApi/png/pokemon/4' alt='Fetched PNG' />
    </div>
  );
};

export default PageThree;
