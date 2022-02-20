import React from 'react';
import { Stat, StatLabel, StatNumber } from '@chakra-ui/react';

interface SdkCard {
  name: string;
  date: string;
  id: string;
}

interface SdkCardProps {
  sdksData: SdkCard[];
  categoryName: string;
}

export default function SdkCard({ sdksData, categoryName }: SdkCardProps) {
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor="gray.500"
      rounded={'lg'}
    >
      <StatLabel fontSize={'2xl'} fontWeight={'medium'}>
        {categoryName}
      </StatLabel>
      {sdksData.map((sdk, index) => (
        <StatNumber fontWeight={'sm'} key={sdk.id}>
          {sdk.name} | {sdk.date}{' '}
        </StatNumber>
      ))}
    </Stat>
  );
}
