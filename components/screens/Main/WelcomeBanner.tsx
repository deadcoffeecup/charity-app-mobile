import { Button, Stack, Text } from '@react-native-material/core';
import React, { FC } from 'react';
import { NavButton } from '../../custom/NavButton';

export const WelcomeBanner: FC = () => {
  return (
    <Stack m={20}>
      <Text>
        Masz w domu rzeczy, z którymi nie wiesz co zrobić? ODDAJ JE
        POTRZEBUJĄCYM - szybko i w zaufane ręce
      </Text>
      <NavButton screen='Signup' title='Załóż konto' />
    </Stack>
  );
};
