// Packages
import React, { useContext } from 'react';

// Context
import { pokeTeamsContext } from '../../context';

// Types
import { PokeTeamsContextValue } from '../../frontendTypes';

/** PokeComputer
 * This will host a user's pokemon, with boxes similar to that of PokeHome.
 * Many sub-components including boxes, pokemon, pokemon stat views, etc. will need to make up this
 * page.
 */

// Main component
const PokeComputer = () => {
  //const { pokeTeams, setPokeTeams } = useContext<PokeTeamsContextValue>(pokeTeamsContext);

  return (
    <div className='page-two'>
      <h1>PokeComputer</h1>
    </div>
  );
};

export default PokeComputer;
