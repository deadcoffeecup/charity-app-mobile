import { Box, Button, Flex, Text } from '@react-native-material/core';
import { Formik } from 'formik';
import React, { FC } from 'react';
import { PropsType } from '../../App';
import { initialState as initialValues } from '../../app/form';

export const Footer: FC<any> = ({ navigation }) => {
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
      <Button
        onPress={() => navigation.navigate('Login')}
        title='Załóż konto'
      />
    </Box>
  );
};
