// Packages
import React, { useEffect, useContext } from 'react';
import { useNavigate, useLoaderData } from 'react-router-dom';

// Types
import { PokeDataContextValue, PokeTeamsContextValue, TypeDictLoader } from '../../frontendTypes';
import { PokeDataResponse } from '../../../types';

// Context
import { pokeDataContext, pokeTeamsContext } from '../../context';

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
  // const { pokeTeams, setPokeTeams } = useContext<PokeTeamsContextValue>(pokeTeamsContext);

  return (
    <div className='page-three'>
      <h1>Versus Analysis</h1>
      
    </div>
  );
};

export default VersusAnalysis;

// Loaders
export const typeDictLoader = async () => {

}
