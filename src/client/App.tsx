// Packages
import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom';

// Layouts
import RootLayout from './layouts/RootLayout';

// Pages
import Home from './pages/Home';
import PageTwo from './pages/PageTwo';

// React router definition
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/PageTwo' element={<PageTwo key='PageTwo' />} />
    </Route>
  )
);

// Main component definition
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
