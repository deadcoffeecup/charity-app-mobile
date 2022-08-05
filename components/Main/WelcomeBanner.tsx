import { Button, Stack, Text } from '@react-native-material/core';
import React from 'react';
import { View } from 'react-native';

export const WelcomeBanner = () => {
  return (
    <Stack m={20}>
      <Text>
        Masz w domu rzeczy, z którymi nie wiesz co zrobić? ODDAJ JE
        POTRZEBUJĄCYM - szybko i w zaufane ręce
      </Text>
      <Button title='Załóż konto' />
    </Stack>
  );
};
