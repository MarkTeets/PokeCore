// Packages
import React, { useContext } from 'react';

// Context
import { pokeTeamsContext } from '../../context';

// Types
import { PokeTeamsContextValue } from '../../frontendTypes';

/** TeamList
 * Shows a list of all teams a user has, and also allows for the creation of new teams.
 * Teams should be able to be limited to certain games/pokedexes, and users can choose to allow
 * or exclude pokemon from expansions as well.
 *
 * Teams should be organized in rows, with sprites of the 6 pokemon arranged in the row.
 * There should be a button on each team that allows one to navigate to a team view page that shows
 * more details. Each team should also have an expanded short summary view within this page
 */

// Main component
const TeamList = () => {
  const { pokeTeams, setPokeTeams } = useContext<PokeTeamsContextValue>(pokeTeamsContext);

  return (
    <div className='page-two'>
      <h1>Team List</h1>
    </div>
  );
};

export default TeamList;
