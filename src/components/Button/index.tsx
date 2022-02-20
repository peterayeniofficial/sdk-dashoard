import { Button } from '@chakra-ui/react';
import React from 'react';

interface LodasSDKButtonProps {
  children: React.ReactNode;
}

export default function LoadSDKButton({ children }: LodasSDKButtonProps) {
  return (
    <Button
      rounded={'full'}
      px={6}
      colorScheme={'teal'}
      bg={'teal.400'}
      _hover={{ bg: 'teal.500' }}
    >
      {children}
    </Button>
  );
}
