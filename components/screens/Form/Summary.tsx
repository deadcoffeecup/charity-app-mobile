import { Button, Flex, Text } from '@react-native-material/core';
import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { prevStep, nextStep } from '../../../app/form';
import { RootState } from '../../../app/store';
import { useAuth } from '../../../context/AuthContext';

export const Summary = () => {
  const dispatch = useDispatch();
  const { currentUser } = useAuth();
  const {
    stuff,
    numberOfBags,
    adress,
    dateOfReceipt,
    targetGroup,
    targetOrganisation,
    voivodship,
  } = useSelector((state: RootState) => state.formValues);

  return (
    <View>
      <Text>Podsumowanie</Text>
      <Text>Jakie rzeczy</Text>
      {stuff.map((el) => (
        <Text>{el}</Text>
      ))}
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
