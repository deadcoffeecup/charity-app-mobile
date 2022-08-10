import { Button, Flex, Text, TextInput } from '@react-native-material/core';
import { Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, prevStep } from '../../../app/form';
import { RootState } from '../../../app/store';

export const Step4 = () => {
  const dispatch = useDispatch();
  const { adress, dateOfReceipt } = useSelector(
    (state: RootState) => state.formValues
  );
  const initialValues = {
    adress: {
      street: '',
      city: '',
      zipCode: '',
      telephoneNumber: undefined,
    },
    dateOfReceipt: {
      date: undefined,
      time: undefined,
    },
  };

  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          console.warn(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <Text>Ulica</Text>
            <TextInput
              onChangeText={handleChange('adress.street')}
              onBlur={handleBlur('targetOrganisation')}
            />
            <Text>Miasto</Text>
            <TextInput onChangeText={handleChange('adress.city')} />
            <Text>Kod pocztowy</Text>
            <TextInput onChangeText={handleChange('adress.zipCode')} />
            <Text>Telefon</Text>
            <TextInput
              keyboardType='phone-pad'
              onChangeText={handleChange('adress.zipCode')}
            />
            <Text>Data</Text>
            <TextInput onChangeText={handleChange('dateOfReceipt.date')} />
            <Text>Godzina</Text>
            <TextInput onChangeText={handleChange('dateOfReceipt.time')} />
            <Text>Notatka dla kuriera</Text>
            <TextInput
              onChangeText={handleChange('dateOfReceipt.notesForCourier')}
            />
          </View>
        )}
      </Formik>
      <Flex m={10} justify='center' direction='row'>
        <Button
          title='Cofnij'
          onPress={() => {
            dispatch(prevStep());
          }}
        />
        <Button
          title='Dalej'
          onPress={() => {
            dispatch(nextStep());
          }}
        />
      </Flex>
    </View>
  );
};
