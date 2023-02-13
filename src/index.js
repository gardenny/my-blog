import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail/PostDetail';
import Edit from './pages/Edit/Edit';
import New from './pages/New';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: '/new', element: <New /> },
      { path: '/posts/:id', element: <PostDetail /> },
      { path: '/posts/:id/edit', element: <Edit /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
