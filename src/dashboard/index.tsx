import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import Header from './Header';
import Content from './Content';
import LoadSDKButton from '../components/Button/index';

export default function Dashboard() {
  return (
    <Box>
      <Stack spacing={6} direction={'row'}>
        <LoadSDKButton>Installed</LoadSDKButton>
        <LoadSDKButton>Uninstalled</LoadSDKButton>
      </Stack>
      <Header />
      <Content />
    </Box>
  );
}
