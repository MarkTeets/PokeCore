// Packages
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

// Main component
const WelcomeLayout = () => {
  return (
    <div className='root-layout'>
      <header>
        <nav id='main-nav'>
          <NavLink to='/' className='nav-link'>
            Home
          </NavLink>
          <NavLink to='/PageTwo' className='nav-link'>
            Page Two
          </NavLink>
          <NavLink to='/PageThree' className='nav-link'>
            Page Three
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default WelcomeLayout;
