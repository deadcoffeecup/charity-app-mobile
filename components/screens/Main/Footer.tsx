import { Box, Button, Flex, Text } from '@react-native-material/core';
import React, { FC } from 'react';
import { useAuth } from '../../../context/AuthContext';

export const Footer: FC<any> = ({ navigation }) => {
  const { currentUser } = useAuth();
  return (
    <Box pb={100} m={10} h={200}>
      <Text>Skontaktuj się z nami</Text>
      <Flex items='start'>
        <Button title='Regulamin' variant='text' />
        <Button title='Polityka Prywatności' variant='text' />
        <Button
          title='Instrukcja jak spakować rzeczy do oddania'
          variant='text'
        />
      </Flex>
      {!currentUser && (
        <Button
          onPress={() => navigation.navigate('Signup')}
          title='Załóż konto'
        />
      )}
    </Box>
  );
};
