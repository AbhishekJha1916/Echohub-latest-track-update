import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './layout';
// import Feed from './components/Feed/Feed';
import LoginPage from './pages/authentication/login';
import SignupPage from './pages/authentication/signup';
import PageNotFound from './pages/notFound';
import Home from './pages/home';



// Define your router using createBrowserRouter and createRoutesFromElements
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/users/accounts/login' element={<LoginPage />} />
      <Route path='/users/accounts/signup' element={<SignupPage />} />
      <Route path='*' element={<PageNotFound />} />
    </Route>
  )
);

// Type assertion to ensure `rootElement` is not null
const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
