import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home.js';
import Portal_artista from './pagínas/Portal artista.js';
import Projetos from './pagínas/Projetos.js';
import Inscricoes from './pagínas/Inscricoes.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/portal_artistas",
    element: <Portal_artista/>
  },
  {
    path: "/inscricoes",
    element: <Inscricoes/>
  },
  {
    path: "/projetos",
    element: <Projetos/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rotas} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
