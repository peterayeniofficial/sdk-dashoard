import React from 'react';
import { Box, Divider, Heading, HStack, Text } from '@chakra-ui/react';

export default function Header() {
  return (
    <>
      <HStack alignItems="center" justifyContent="space-between" mb={3}>
        <Box>
          <Heading>Installed SDK's</Heading>
          <Text>Last updated:</Text>
        </Box>
        <Box>
          <Text>10</Text>
        </Box>
      </HStack>
      <Divider borderColor="gray" />
    </>
  );
}
