import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './Header';
import Content from './Content';

export default function Dashboard() {
  return (
    <Box>
      <Header />
      <Content />
    </Box>
  );
}
