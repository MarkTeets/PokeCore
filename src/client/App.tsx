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
import PokeLookUp from './pages/Pokemon/PokeLookUp';

// Context
import { userContext } from './context';

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
      <Route path='/pokemon' element={<PokemonLayout key='PokemonLayout' />}>
        <Route index element={<PokeLookUp />} />
      </Route>
    </Route>
  )
);

// Main component definition
const App = (): JSX.Element => {
  const [user, setUser] = useState<User>(null);

  const userContextValue: UserContextValue = useMemo<UserContextValue>(
    () => ({ user, setUser }),
    [user]
  );

  return (
    <userContext.Provider value={userContextValue}>
      <RouterProvider router={router} />
    </userContext.Provider>
  );
};

export default App;
