// Packages
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Pages
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement === null) {
  throw new Error('html element with id of "root" was not found.');
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App key='App' />
  </StrictMode>
);
