// Packages
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PokeDataResponse } from '../../../types';

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
      return;
    }

    const response = await fetch(`/api/pokeApi/pokemon/${pokemonDict[input]}`);
    if (response.ok) {
      const res = await response.json();
      setData(res);
      console.log(res);
    } else {
      setData('Connection to backend failed');
      // console.log('fail');
    }
  };

  return (
    <div className='page-three'>
      <h1>Let&apos;s get that sweet sweet data</h1>
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
