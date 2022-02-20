import React from 'react';
import {
  Box,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import Header from './Header';
import Content from './Content';
import LoadSDKButton from '../components/Button/index';

export default function Dashboard() {
  return (
    <Tabs variant="unstyled">
      <TabList>
        <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Installed</Tab>
        <Tab _selected={{ color: 'white', bg: 'green.400' }}>Uninstalled</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Header />
        </TabPanel>
        <TabPanel>
          <Header />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
