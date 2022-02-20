import React from 'react';
import { Box, SimpleGrid, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import { getYearAgo } from '../utils/getYearAgo';

interface SdkData {
  name: string;
  id: string;
  categories: string[];
  lastSeenDate: string;
}

interface ContentProps {
  sdksData: SdkData[];
}

export default function Content({ sdksData }: ContentProps) {
  const categories = sdksData.map((sdk) => sdk.categories[0]);
  const uniqueCategories = Array.from(new Set(categories));

  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        {uniqueCategories.map((cat) => (
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
                  {data.name}, {getYearAgo(data.lastSeenDate)}
                </StatNumber>
              ))}
          </Stat>
        ))}
      </SimpleGrid>
    </Box>
  );
}
