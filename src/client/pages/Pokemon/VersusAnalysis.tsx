// Packages
import React, { useEffect, useContext } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';

// Types
import { PokeDataContextValue, PokeTeamsContextValue, TypeDictLoader } from '../../frontendTypes';

// Context
import { pokeDataContext, pokeTeamsContext } from '../../context';

// Types
import { PokeDataResponse } from '../../../types';

/** VersusAnalysis
 * Select a pokemon. Add tera-types, held items, abilities, moves, etc. Then it'd suggest pokemon
 * that would be good against this pokemon. There are many different things to check against. Type
 * comparisons, maybe you'd be able to filter based on certain moves like "Nasty Plot" or abilities
 */

// Main component
const VersusAnalysis = () => {
  // const [data, setData] = useState<string | null>(null);
  const loaderData = useLoaderData() as TypeDictLoader;
  // const navigate = useNavigate();
  const { typeDict, setTypeDict } = useContext<PokeDataContextValue>(pokeDataContext);
  const { pokeTeams, setPokeTeams } = useContext<PokeTeamsContextValue>(pokeTeamsContext);

  useEffect(() => {
    if (!loaderData?.typeDict) return;
    setTypeDict(loaderData.typeDict);
  }, [loaderData.typeDict, setTypeDict]);

  return (
    <div className='page-three'>
      <h1>Versus Analysis</h1>
      <div>{JSON.stringify(typeDict)}</div>
    </div>
  );
};

export default VersusAnalysis;

// Loaders
export const typeDictLoader = async () => {
  console.log('fetching typeDict');
  const response: Response = await fetch('/api/pokeApi/type');
  console.log('response:', response);
  // If the response status isn't in 200s, inform user
  if (!response.ok) {
    return { error: 'Retrieval failed, please try again' };
  }

  // The request response has status 200, convert the response back to JS from JSON and proceed
  const res = (await response.json()) as PokeDataResponse;
  const typeList = res.pokeData?.results;

  if (!typeList) {
    return { error: 'Retrieval failed, please try again' };
  }

  const typeDict = {};
  for (const typeObj of typeList) {
    const key = typeObj.name;
    const url = '/api/pokeApi/' + typeObj.url.replace('https://pokeapi.co/api/v2/', '');
    const typeResponse = await fetch(url);
    const value = await typeResponse.json();
    typeDict[key] = value;
  }
  console.log(typeDict);
  return { typeDict };
};
