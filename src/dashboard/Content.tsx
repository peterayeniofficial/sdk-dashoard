import React from 'react';

import { Box, SimpleGrid, Stat, StatLabel, StatNumber } from '@chakra-ui/react';

interface SdkData {
  name: string;
  id: string;
  categories: string[];
  lastSeenDate: string;
}

interface ContentProps {
  sdksData: SdkData[];
}

let cats = [
  'Backend',
  'Utilities',
  'Payments',
  'App Platform',
  'Social',
  'Location',
  'OCR',
  'UI',
  'App Performance Management',
  'Analytics',
];

export default function Content({ sdksData }: ContentProps) {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        {cats.map((cat) => (
          <Stat
            px={{ base: 4, md: 8 }}
            py={'5'}
            shadow={'xl'}
            border={'1px solid'}
            borderColor="gray.500"
            rounded={'lg'}
            height="auto"
          >
            <StatLabel fontSize={'2xl'} fontWeight={'medium'}>
              {cat}
            </StatLabel>
            {sdksData
              ?.filter((sdk) => sdk.categories[0] === cat)
              .map((data) => (
                <StatNumber fontWeight={'sm'}>
                  {data.name} {data.lastSeenDate}
                </StatNumber>
              ))}
          </Stat>
        ))}
      </SimpleGrid>
    </Box>
  );
}
