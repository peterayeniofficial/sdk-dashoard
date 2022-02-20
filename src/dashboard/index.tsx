import React from 'react';
import { useQuery } from 'react-query';
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
import { getInstalledSdks, getUnInstalledSdks } from '../services/api';

export default function Dashboard() {
  const {
    data: sdkData,
    isLoading: sdkLoading,
    error: sdkError,
  } = useQuery('installedSdk', getInstalledSdks);
  const {
    data: unSdkData,
    isLoading: unSdkLoading,
    error: unSdkError,
  } = useQuery('unInstalledSdk', getUnInstalledSdks);
  console.log('sdkData', sdkData);
  console.log('unSdkData', unSdkData);

  const { installedSdks, latestUpdatedDate } = sdkData || [];
  const { uninstalledSdks, latestUpdatedDate: unInstalledLatestUpdatedDate } =
    unSdkData || [];

  return (
    <Tabs variant="unstyled">
      <TabList>
        <Tab _selected={{ color: 'white', bg: 'blue.500' }}>Installed</Tab>
        <Tab _selected={{ color: 'white', bg: 'green.400' }}>Uninstalled</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Header
            totalSdks={installedSdks?.length}
            latestUpdatedDate={latestUpdatedDate}
          />
          <Content />
        </TabPanel>
        <TabPanel>
          <Header
            totalSdks={uninstalledSdks?.length}
            latestUpdatedDate={unInstalledLatestUpdatedDate}
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
