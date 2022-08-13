import { Button, Flex, Text } from '@react-native-material/core';
import { doc, setDoc } from 'firebase/firestore';
import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { prevStep, nextStep } from '../../../app/form';
import { RootState } from '../../../app/store';
import { useAuth } from '../../../context/AuthContext';
import { db } from '../../../firebaseConfig';

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

  const data = {
    stuff,
    numberOfBags,
    adress,
    dateOfReceipt,
    targetGroup,
    targetOrganisation,
    voivodship,
    userEmail: currentUser?.email,
  };

  const addPackageOrderToDb = async () => {
    if (currentUser !== null) {
      await setDoc(doc(db, 'packageOrders', currentUser.uid), data);
    } else alert('no user logged');
  };

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
        <Button onPress={addPackageOrderToDb} title='Potwierdzam' />
      </Flex>
    </View>
  );
};
