import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Outlet } from 'react-router-dom';

import { PostProvider } from './context/PostProvider';
import { login } from './store/authSlice';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const queryQlient = new QueryClient();

export default function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.login) dispatch(login());
    setLoading(false);
  }, [dispatch]);

  if (loading) return <LoadingSpinner />;
  return (
    <QueryClientProvider client={queryQlient}>
      <PostProvider>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </PostProvider>
    </QueryClientProvider>
  );
}
