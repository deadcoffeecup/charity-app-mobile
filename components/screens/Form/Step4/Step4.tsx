import { Button, Flex, Text, TextInput } from '@react-native-material/core';
import { Formik, Field } from 'formik';
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
import { FormError } from '../../../custom/FormError';
import { StyledButton } from '../../../custom/Buttons/NavButton';

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
  function validateTextInput(value: string | number) {
    let error;
    if (!value) {
      error = 'Uzupełnij to pole';
    }
    return error;
  }

  return (
    <Flex items='center'>
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
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <View style={{ width: '80%' }}>
            <Text>Ulica</Text>
            <Field
              color={'cadetblue'}
              as={TextInput}
              value={values.street}
              onChangeText={handleChange('street')}
              validate={validateTextInput}
            />
            {!!errors.street && !!touched.street && (
              <FormError error={errors.street} />
            )}
            <Text>Miasto</Text>
            <Field
              color={'cadetblue'}
              as={TextInput}
              value={values.city}
              onChangeText={handleChange('city')}
              validate={validateTextInput}
            />
            {!!errors.city && !!touched.city && (
              <FormError error={errors.city} />
            )}
            <Text>Kod pocztowy</Text>
            <Field
              color={'cadetblue'}
              as={TextInput}
              value={values.zipCode}
              onChangeText={handleChange('zipCode')}
              validate={validateTextInput}
            />
            {!!errors.zipCode && !!touched.zipCode && (
              <FormError error={errors.zipCode} />
            )}
            <Text>Telefon</Text>
            <Field
              color={'cadetblue'}
              as={TextInput}
              value={values.telephoneNumber?.toString()}
              keyboardType='phone-pad'
              onChangeText={handleChange('telephoneNumber')}
              validate={validateTextInput}
            />
            {!!errors.telephoneNumber && !!touched.telephoneNumber && (
              <FormError error={errors.telephoneNumber} />
            )}
            <Text>Data</Text>
            <Field
              color={'cadetblue'}
              as={TextInput}
              value={values.date?.toString()}
              onChangeText={handleChange('date')}
              validate={validateTextInput}
            />
            {!!errors.date && !!touched.date && (
              <FormError error={errors.date} />
            )}
            <Text>Godzina</Text>
            <Field
              color={'cadetblue'}
              as={TextInput}
              value={values.time?.toString()}
              onChangeText={handleChange('time')}
              validate={validateTextInput}
            />
            {!!errors.time && !!touched.time && (
              <FormError error={errors.time} />
            )}
            <Text>Notatka dla kuriera</Text>
            <Field
              color={'cadetblue'}
              as={TextInput}
              value={values.notesForCourier}
              onChangeText={handleChange('notesForCourier')}
              validate={validateTextInput}
            />
            {!!errors.notesForCourier && !!touched.notesForCourier && (
              <FormError error={errors.notesForCourier} />
            )}
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
    </Flex>
  );
};
