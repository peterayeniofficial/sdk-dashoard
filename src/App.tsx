import React from 'react';
import { Container } from '@chakra-ui/react';
import Dashboard from './dashboard';

function App() {
  return (
    <Container maxW={'5xl'} mt={8}>
      <Dashboard />
    </Container>
  );
}

export default App;
