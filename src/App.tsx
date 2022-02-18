import React from 'react';
import { Container, Heading } from '@chakra-ui/react';
import Dashboard from './dashboard';

function App() {
  return (
    <Container>
      <Heading>SDK Dashboard</Heading>
      <Dashboard />
    </Container>
  );
}

export default App;
