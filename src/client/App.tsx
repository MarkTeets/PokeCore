// Packages
import React, { useState, useMemo } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';

// Types
import { User } from '../types';
import { UserContextValue } from './frontendTypes';

// Layouts
import RootLayout from './layouts/RootLayout';
import WelcomeLayout from './layouts/WelcomeLayout';
import PokemonLayout from './layouts/PokemonLayout';

// Pages
import Home, { userLoader } from './pages/Welcome/Home';
import PageTwo from './pages/Welcome/PageTwo';
import PageThree from './pages/Welcome/PageThree';
import PokeLookUp, { pokedexLoader } from './pages/Pokemon/PokeLookUp';
import VersusAnalysis, { typeDictLoader } from './pages/Pokemon/VersusAnalysis';
import PokeComputer from './pages/Pokemon/PokeComputer';
import TeamList from './pages/Pokemon/TeamList';
import TeamView from './pages/Pokemon/TeamView';

// Context
import { userContext, pokeDataContext, pokeTeamsContext } from './context';

// React router definition
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout key='RootLayout' />}>
      {/* Welcome Layout */}
      <Route path='/' element={<WelcomeLayout key='WelcomeLayout' />}>
        <Route index element={<Home />} loader={userLoader} />
        <Route path='/PageTwo' element={<PageTwo key='PageTwo' />} />
        <Route path='/PageThree' element={<PageThree key='PageThree' />} />
      </Route>
      <Route path='/Pokemon' element={<PokemonLayout key='PokemonLayout' />}>
        <Route index element={<PokeLookUp />} loader={pokedexLoader} />
        <Route path='/Pokemon/PokeComputer' element={<PokeComputer />} />
        <Route path='/Pokemon/TeamList' element={<TeamList />} />
        <Route path='/Pokemon/TeamView' element={<TeamView />} />
        <Route
          path='/Pokemon/VersusAnalysis'
          element={<VersusAnalysis />}
          loader={typeDictLoader}
        />
      </Route>
    </Route>
  )
);

// Main component definition
const App = (): JSX.Element => {
  const [user, setUser] = useState<User>(null);
  const [typeDict, setTypeDict] = useState(null);
  const [pokeTeams, setPokeTeams] = useState(null);

  const userContextValue: UserContextValue = useMemo<UserContextValue>(
    () => ({ user, setUser }),
    [user]
  );
  const pokeDataContextValue = useMemo(() => ({ typeDict, setTypeDict }), [typeDict]);
  const pokeTeamsContextValue = useMemo(() => ({ pokeTeams, setPokeTeams }), [pokeTeams]);

  return (
    <userContext.Provider value={userContextValue}>
      <pokeDataContext.Provider value={pokeDataContextValue}>
        <pokeTeamsContext.Provider value={pokeTeamsContextValue}>
          <RouterProvider router={router} />
        </pokeTeamsContext.Provider>
      </pokeDataContext.Provider>
    </userContext.Provider>
  );
};

export default App;
