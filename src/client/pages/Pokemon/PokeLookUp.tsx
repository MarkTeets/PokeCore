// Packages
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getResourceByNameOrId } from '../../../utils/pokeApi/fetchers/getResourceByNameOrId';
import { RESOURCE_KEY_MAP, EndpointTypeMap } from '../../../utils/pokeApi/constants';

// Types
import { PokeDataResponse, ResourceResponsePackage } from '../../../types';

/** PokeLookUp
 * The purpose of this page is to be able to look up details for a specific species of pokemon.
 * This will eventually look like a pokemondb.net entry, but briefer
 *
 * It may be possible at some point to click to add a pokemon that's been looked up here to a
 * user's PokeComputer or Team, if such a pokemon is allowed on the team based on what region the
 * pokemon is from, and what region the team is tied to.
 */

// Main component
const PokeLookUp = () => {
  const pokemonDict = useLoaderData() as any;
  const [input, setInput] = useState<string>('');
  const [data, setData] = useState(null);

  const handleInputChange = (event) => {
    console.log('event.target.value', event.target.value);
    setInput(event.target.value);
  };

  const handleClick = async () => {
    if (!Object.hasOwn(pokemonDict, input)) {
      console.log(`input ${input} not found in pokeDict`);
      return;
    }

    const result = (await getResourceByNameOrId(
      RESOURCE_KEY_MAP.POKEMON_SPECIES,
      pokemonDict[input]
    )) as ResourceResponsePackage<EndpointTypeMap['POKEMON_SPECIES']>;
    if (result.status !== 'SUCCESS' || result.data === null) {
      console.log(`getResourceByNameOrId('POKEMON_SPECIES', ${pokemonDict[input]}) failed`);
      setData('Fail');
      return;
    }

    if (result.status === 'SUCCESS' && result.data !== null) {
      setData(result.data);
    }
    console.log('getResourceByNameOrId result:', result);
  };

  return (
    <div className='page-three'>
      <h1>PokeLookUp</h1>
      <input type='text' value={input} onChange={handleInputChange} />
      <button onClick={handleClick}>Search</button>
      {/* <div>National Dex: {nationalDex['charmander']}</div> */}
      {data && Object.hasOwn(pokemonDict, input) && (
        <img src={`/api/pokeApi/png/pokemon/${pokemonDict[input]}`} alt='Fetched PNG' />
      )}
      <div>Data: {JSON.stringify(data)}</div>
    </div>
  );
};

export default PokeLookUp;

// Loader
export const pokedexLoader = async () => {
  console.log('fetching pokedex');
  const response = (await getResourceByNameOrId(
    RESOURCE_KEY_MAP.POKEDEX,
    1
  )) as ResourceResponsePackage<EndpointTypeMap['POKEDEX']>;
  console.log('response:', response);

  if (response.status === 'FAILED' || response.data === null) {
    return { error: 'Retrieval failed, please try again' };
  }

  if (response.status === 'SUCCESS' && response.data !== null) {
    const pokemonEntries = response.data.pokemon_entries;
    console.log('pokemonEntries[0]', pokemonEntries[0]);
    const pokemonDict = {};
    pokemonEntries.map((entry) => {
      pokemonDict[entry['pokemon_species']['name']] = entry['entry_number'];
    });
    console.log('pokemonDict', pokemonDict);
    return pokemonDict;
  }

  return { error: 'Retrieval failed, please try again' };
};
