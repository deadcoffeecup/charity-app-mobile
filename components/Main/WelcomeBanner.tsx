import { Button, Stack, Text } from '@react-native-material/core';
import React, { FC } from 'react';

export const WelcomeBanner: FC<any> = ({ navigation }) => {
  return (
    <Stack m={20}>
      <Text>
        Masz w domu rzeczy, z którymi nie wiesz co zrobić? ODDAJ JE
        POTRZEBUJĄCYM - szybko i w zaufane ręce
      </Text>
      <Button
        onPress={() => navigation.navigate('Signup')}
        title='Załóż konto'
      />
    </Stack>
  );
};
