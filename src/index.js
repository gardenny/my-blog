import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail/PostDetail';
import Edit from './pages/Edit/Edit';
import New from './pages/New';
import { Provider } from 'react-redux';
import { store } from './store/store';
import ProtectedRoute from './pages/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/new',
        element: (
          <ProtectedRoute>
            <New />
          </ProtectedRoute>
        ),
      },
      {
        path: '/posts/:postId',
        element: <PostDetail />,
      },
      {
        path: '/posts/:postId/edit',
        element: (
          <ProtectedRoute>
            <Edit />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
