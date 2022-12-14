import { Button, Flex, Text } from '@react-native-material/core';
import { doc, setDoc } from 'firebase/firestore';
import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { useNavigation } from '@react-navigation/native';

import { RootState } from '../../../../app/store';
import { useAuth } from '../../../../context/AuthContext';
import { db } from '../../../../firebaseConfig';
import { StyledButton } from '../../../custom/Buttons/NavButton';

export const Summary = () => {
  const dispatch = useDispatch();
  const { currentUser } = useAuth();

  const addPackageOrderToDb = async () => {
    if (currentUser !== null) {
      await setDoc(doc(db, 'packageOrders', currentUser.uid), orderData);
    } else alert('no user logged');
  };

  const {
    stuff,
    numberOfBags,
    adress,
    dateOfReceipt,
    targetGroup,
    targetOrganisation,
    voivodship,
  } = useSelector((state: RootState) => state.formValues);

  const orderData = {
    stuff,
    numberOfBags,
    adress,
    dateOfReceipt,
    targetGroup,
    targetOrganisation,
    voivodship,
    userEmail: currentUser?.email,
  };
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View>
      <Text>Podsumowanie</Text>
      <Text>Jakie rzeczy</Text>
      {orderData.stuff.map((el) => (
        <Text key={el}>{el}</Text>
      ))}
      <Text>ilość worków</Text>
      {orderData.numberOfBags}
      <Text>{orderData.adress.street}</Text>
      <Text>{orderData.adress.zipCode}</Text>
      <Text>{orderData.adress.city}</Text>
      <Text>Telephone:{orderData.adress.telephoneNumber?.toString()}</Text>

      <Flex m={10} justify='center' direction='row'>
        <StyledButton
          title='Cofnij'
          onPress={() => {
            navigation.navigate('Step4' as keyof RootStackParamList);
          }}
        />
        <StyledButton onPress={addPackageOrderToDb} title='Potwierdzam' />
      </Flex>
    </View>
  );
};
