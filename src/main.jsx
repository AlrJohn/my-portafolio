import './instrument.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import * as Sentry from '@sentry/react';
import { reactErrorHandlers } from './instrument.jsx';
import { monitoringEnabled } from './config/env.js';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import Experience from './pages/Experience.jsx';
import Contact from './pages/Contact.jsx';
import Coursework from './pages/Coursework.jsx';
import NotFound from './pages/NotFound.jsx';
import RouteError from './pages/RouteError.jsx';

import './index.css';

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
document.documentElement.classList.toggle('dark', savedTheme === 'dark' || (!savedTheme && prefersDark));

const createInstrumentedRouter = monitoringEnabled
  ? Sentry.wrapCreateBrowserRouterV7(createBrowserRouter)
  : createBrowserRouter;
const router = createInstrumentedRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'projects', element: <Projects /> },
      { path: 'projects/:slug', element: <ProjectDetail /> },
      { path: 'experience', element: <Experience /> },
      { path: 'coursework', element: <Coursework /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root'), reactErrorHandlers).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
