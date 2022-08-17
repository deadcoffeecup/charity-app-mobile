import { Button, Flex, Text, TextInput } from '@react-native-material/core';
import { Formik } from 'formik';
import React, { FC } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import {
  setAdress,
  setDateOfReceipt,
  nextStep,
  prevStep,
} from '../../../../app/form';
import { RootState } from '../../../../app/store';
import { StyledButton } from '../../../custom/NavButton';

export const Step4: FC = () => {
  const dispatch = useDispatch();
  const { adress, dateOfReceipt } = useSelector(
    (state: RootState) => state.formValues
  );
  const initialValues = {
    street: adress.street,
    city: adress.city,
    zipCode: adress.zipCode,
    telephoneNumber: adress.telephoneNumber,
    date: dateOfReceipt.date,
    time: dateOfReceipt.time,
    notesForCourier: dateOfReceipt.notesForCourier,
  };

  return (
    <ScrollView>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          dispatch(
            setAdress({
              value: {
                street: values.street,
                city: values.city,
                zipCode: values.zipCode,
                telephoneNumber: values.telephoneNumber,
              },
            })
          );
          dispatch(
            setDateOfReceipt({
              value: {
                date: values.date,
                time: values.time,
                notesForCourier: values.notesForCourier,
              },
            })
          );
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <View>
            <Text>Ulica</Text>
            <TextInput
              value={values.street}
              onChangeText={handleChange('street')}
            />
            <Text>Miasto</Text>
            <TextInput
              value={values.city}
              onChangeText={handleChange('city')}
            />
            <Text>Kod pocztowy</Text>
            <TextInput
              value={values.zipCode}
              onChangeText={handleChange('zipCode')}
            />
            <Text>Telefon</Text>
            <TextInput
              value={values.telephoneNumber?.toString()}
              keyboardType='phone-pad'
              onChangeText={handleChange('telephoneNumber')}
            />
            <Text>Data</Text>
            <TextInput
              value={values.date?.toString()}
              onChangeText={handleChange('date')}
            />
            <Text>Godzina</Text>
            <TextInput
              value={values.time?.toString()}
              onChangeText={handleChange('time')}
            />
            <Text>Notatka dla kuriera</Text>
            <TextInput
              value={values.notesForCourier}
              onChangeText={handleChange('notesForCourier')}
            />
            <Flex m={10} justify='center' direction='row'>
              <StyledButton
                title='Cofnij'
                onPress={() => {
                  dispatch(prevStep());
                  handleSubmit();
                }}
              />
              <StyledButton
                title='Dalej'
                onPress={() => {
                  handleSubmit();
                  dispatch(nextStep());
                }}
              />
            </Flex>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};
