// Packages
import React, { useContext } from 'react';

// Context
import { pokeTeamsContext } from '../../context';

// Types
import { PokeTeamsContextValue } from '../../frontendTypes';

/** TeamView
 * Shows a more detailed view of one team. Will have several tabs with overview of different
 * details. Examples include: Super-effective summary, defensive summary
 */

// Main component
const TeamView = () => {
  const { pokeTeams, setPokeTeams } = useContext<PokeTeamsContextValue>(pokeTeamsContext);

  return (
    <div className='page-two'>
      <h1>Team View</h1>
    </div>
  );
};

export default TeamView;
