import React from 'react';

import { Box, SimpleGrid } from '@chakra-ui/react';
import SdkCard from '../components/SdkCard/index';

const dummyData = [
  { name: 'SDK 1', date: '2020-01-01', id: '1' },
  { name: 'SDK 2', date: '2020-01-01', id: '2' },
];

export default function Content() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <SdkCard categoryName="Backend" sdksData={dummyData} />
      </SimpleGrid>
    </Box>
  );
}
