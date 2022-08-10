import { Button, Flex, Text } from '@react-native-material/core';
import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { prevStep, nextStep } from '../../../app/form';

export const Summary = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Summary</Text>
      <Flex m={10} justify='center' direction='row'>
        <Button
          title='Cofnij'
          onPress={() => {
            dispatch(prevStep());
          }}
        />
        <Button title='Wyślij' />
      </Flex>
    </View>
  );
};
