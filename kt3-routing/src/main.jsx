import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import App from './App';

// В разработке обычные адреса, в сборке для GitHub Pages — адреса с #.
const Router = import.meta.env.DEV ? BrowserRouter : HashRouter;

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);
