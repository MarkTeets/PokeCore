// Packages
import React, { useState } from 'react';

// Types
import { NamedAPIResourceList } from '../../../utils/pokeApi/models';
import { ResourceResponsePackage } from '../../../types';

// Utils
import { EndpointTypeMap, RESOURCE_KEY_MAP } from '../../../utils/pokeApi/constants';
import { getResourceByNameOrId } from '../../../utils/pokeApi/fetchers/getResourceByNameOrId';
import { getResourceList } from '../../../utils/pokeApi/fetchers/getResourceList';
import { getEntireResource } from '../../../utils/pokeApi/fetchers/getEntireResource';
// import { getTypeList, PokeTypes } from '../../../utils/classes/PokeTypes';
// import TypeCalcDisplayBlock from '../Pokemon/TypeCalcDisplayBlock';
// import TypeCalc from '../Pokemon/TypeCalcRow';
import { TypeDisplayName } from '../../../utils/pokeApi/constants';
import TypeSummary from '../Pokemon/TypeSummary';
import { typeMultiplierCounter, offenseTypeMultiplierCalculation, defenseTypeMultiplierCalculation } from '../../../utils/typeEffectivenessCalculations';

// Main component
const PageThree = () => {
  const [data, setData] = useState<string | null>(null);

  /*
  const handleClick = async () => {
    const response = (await getResourceByNameOrId(
      RESOURCE_KEY_MAP.TYPE,
      10
    )) as ResourceResponsePackage<EndpointTypeMap['TYPE']>;
    if (response.data !== null) {
      setData(response.data.name);
      console.log(response);
    } else {
      setData('Connection to backend failed');
      // console.log('fail');
    }
  };

  
  const handleClick2 = async () => {
    const typeList = await getTypeList();
    const types = new PokeTypes(typeList);
    setData(types.getType('fire').name);
  }

  const handleClick3 = async () => {
    const response = (await getResourceByNameOrId(
      RESOURCE_KEY_MAP.POKEDEX,
      1
    )) as ResourceResponsePackage<EndpointTypeMap['POKEDEX']>;
    if (response.status === 'SUCCESS' && response.data !== null) {
      setData(response.data.name);
      console.log(response);
    } else {
      setData('Connection to backend failed');
      // console.log('fail');
    }
  };

  const handleClick4 = async () => {
    const response = (await getResourceList(
      RESOURCE_KEY_MAP.POKEMON_SPECIES
    )) as ResourceResponsePackage<NamedAPIResourceList>;
    if (response.data !== null) {
      //setData(response.data.count.toString());
      console.log(response);
    } else {
      setData('Connection to backend failed');
      // console.log('fail');
    }
  };

  const handleClick5 = () => {
    getEntireResource(RESOURCE_KEY_MAP.POKEMON);
  }


  const handleClick6 = () => {
    getEntireResource(RESOURCE_KEY_MAP.POKEMON_SPECIES);
  }
*/
  const handleClick7 = () => {
    getEntireResource(RESOURCE_KEY_MAP.TYPE);
  };
  
  const typeList = ['FIRE', 'FLYING'] as TypeDisplayName[];
  const typeList2 = ['WATER'] as TypeDisplayName[];

  const handleClick8 = () => {
    // const typeList = ['FIRE', 'FLYING'] as TypeDisplayName[];
    console.log('typeMultiplierCounter: defense');
    console.log(typeMultiplierCounter([
      defenseTypeMultiplierCalculation(typeList),
      defenseTypeMultiplierCalculation(typeList2)
    ]));
    console.log('typeMultiplierCounter: offense');
    console.log(typeMultiplierCounter([
      offenseTypeMultiplierCalculation(typeList),
      offenseTypeMultiplierCalculation(typeList2)
    ]));
  };


  return (
    <div className='page-three'>
      <h1>This is page three</h1>
      {/* <button onClick={handleClick5}>Click to retrieve data</button> */}
      {/* <button onClick={handleClick7}>Click to retrieve data</button> */}
      <button onClick={handleClick8}>Click to retrieve data</button>
      <div>{data}</div>
      {/* <img src='/api/pokeApi/png/pokemon/4' alt='Fetched PNG' /> */}
      {/* <TypeCalcDisplayBlock name='fire' multiplier={1.5} /> */}
      <TypeSummary typeList={typeList} />
    </div>
  );
};

export default PageThree;
