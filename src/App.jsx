import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { PostProvider } from './context/PostProvider';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const queryQlient = new QueryClient();
export default function App() {
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
