import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const queryQlient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryQlient}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
