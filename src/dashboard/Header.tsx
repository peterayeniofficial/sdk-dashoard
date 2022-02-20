import React from 'react';
import { Box, Divider, Heading, HStack, Text } from '@chakra-ui/react';

interface HeaderProps {
  totalSdks: number;
  latestUpdatedDate: string;
  status: string;
}
export default function Header({
  totalSdks,
  latestUpdatedDate,
  status,
}: HeaderProps) {
  const formatedDate = new Date(latestUpdatedDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
  return (
    <>
      <HStack alignItems="center" justifyContent="space-between" mb={3}>
        <Box>
          <Heading>{status} SDK's</Heading>
          <Text>Last updated: {formatedDate}</Text>
        </Box>
        <Box>
          <Text>{totalSdks}</Text>
        </Box>
      </HStack>
      <Divider borderColor="gray" />
    </>
  );
}
