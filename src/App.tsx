import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Container } from '@chakra-ui/react';
import Dashboard from './dashboard';

const queryClient = new QueryClient();

function App() {
  return (
    <Container maxW={'5xl'} mt={8}>
      <QueryClientProvider client={queryClient}>
        <Dashboard />
      </QueryClientProvider>
    </Container>
  );
}

export default App;
