import { Button, Stack, Text } from '@react-native-material/core';
import React from 'react';

export const Footer = () => {
  return (
    <Stack m={20}>
      <Text>Skontaktuj się z nami</Text>
      <Text>
        Regulamin Polityka Prywatności Instrukcja jak spakować rzeczy do oddania
      </Text>
      <Button title='Załóż konto' />
    </Stack>
  );
};
