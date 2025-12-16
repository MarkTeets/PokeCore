// Packages
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

// Main component
const PokemonLayout = () => {
  return (
    <div className='root-layout'>
      <header>
        Pokemon!!!
        {
          <nav id='main-nav'>
            <NavLink to='/Pokemon' className='nav-link'>
              PokeLookUp
            </NavLink>
            <NavLink to='/Pokemon/PokeComputer' className='nav-link'>
              PokeComputer
            </NavLink>
            <NavLink to='/Pokemon/TeamList' className='nav-link'>
              Team List
            </NavLink>
            <NavLink to='/Pokemon/TeamView' className='nav-link'>
              Team View
            </NavLink>
            <NavLink to='/Pokemon/VersusAnalysis' className='nav-link'>
              Versus Analysis
            </NavLink>
          </nav>
        }
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PokemonLayout;
