// Packages
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PokeDataResponse } from '../../../types';
import { getResourceByNameOrId } from '../../../utils/pokeApi/fetchers/getResourceByNameOrId';
import { RESOURCE_KEY_MAP } from '../../../utils/pokeApi/constants';

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

    const result = await getResourceByNameOrId(RESOURCE_KEY_MAP.POKEMON, pokemonDict[input]);
    if (result.status != 'SUCCESS') {
      console.log(`getResourceByNameOrId('POKEMON', ${pokemonDict[input]}) failed`);
      setData('Fail');
      return;
    }

    console.log('getResourceByNameOrId result:', result);
    setData(result.data);

    /*
    const response = await fetch(`/api/pokeApi/pokemon/${pokemonDict[input]}`);
    if (response.ok) {
      const res = await response.json();
      setData(res);
      console.log(res);
    } else {
      setData('Connection to backend failed');
      // console.log('fail');
    }
    */
  };

  return (
    <div className='page-three'>
      <h1>PokeLookUp</h1>
      <input type='text' value={input} onChange={handleInputChange} />
      <button onClick={handleClick}>Search</button>
      {/* <div>National Dex: {nationalDex['charmander']}</div> */}
      {data && <img src={`/api/pokeApi/png/pokemon/${pokemonDict[input]}`} alt='Fetched PNG' />}
      <div>Data: {JSON.stringify(data)}</div>
    </div>
  );
};

export default PokeLookUp;

// Loader
export const pokedexLoader = async () => {
  console.log('fetching pokedex');
  const response: Response = await fetch('/api/pokeApi/pokedex/1');
  console.log('response:', response);
  // If the response status isn't in 200s, inform user
  if (!response.ok) {
    return { error: 'Retrieval failed, please try again' };
  }

  // The request response has status 200, convert the response back to JS from JSON and proceed
  const res = (await response.json()) as PokeDataResponse;

  if (res.status === 'valid') {
    console.log(res);
    //return res.pokeData;
    const pokemonEntries = res.pokeData?.pokemon_entries;
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
