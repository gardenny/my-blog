import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header/Header';

const queryQlient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryQlient}>
      <Header />
      <main>
        <Outlet />
      </main>
    </QueryClientProvider>
  );
}
