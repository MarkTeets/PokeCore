import React, { createContext } from 'react';

// Types
import { UserContextValue, PokeDataContextValue, PokeTeamsContextValue } from './frontendTypes';

// Context
export const userContext = createContext<UserContextValue>({
  user: null,
  setUser: () => {}
});

export const pokeDataContext = createContext<PokeDataContextValue>({
  typeDict: null,
  setTypeDict: () => {}
});

export const pokeTeamsContext = createContext<PokeTeamsContextValue>({
  pokeTeams: null,
  setPokeTeams: () => {}
});
