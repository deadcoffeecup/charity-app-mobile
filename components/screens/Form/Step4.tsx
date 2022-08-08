import { Button } from '@react-native-material/core';
import { Formik } from 'formik';
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, prevStep } from '../../../app/form';
import { RootState } from '../../../app/store';

export const Step4 = () => {
  const dispatch = useDispatch();
  const { adress, dateOfReceipt } = useSelector(
    (state: RootState) => state.formValues
  );
  const initialValues = {};

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        console.warn(values);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <>
          <TextInput
            onChangeText={handleChange(['adress.street'])}
            value={adress.street}
          />
          <TextInput
            onChangeText={handleChange('targetOrganisation')}
            value={adress.city}
          />
          <TextInput
            onChangeText={handleChange('targetOrganisation')}
            value={adress.zipCode}
          />
          <TextInput
            onChangeText={handleChange('targetOrganisation')}
            value={adress.telephoneNumber?.toString()}
          />
          <TextInput
            onChangeText={handleChange('targetOrganisation')}
            value={dateOfReceipt.date?.toString()}
          />
          <TextInput
            onChangeText={handleChange('targetOrganisation')}
            value={dateOfReceipt.time?.toString()}
          />
          <TextInput
            onChangeText={handleChange('targetOrganisation')}
            value={dateOfReceipt.notesForCourier}
          />
          <Button
            title='Prev'
            onPress={() => {
              dispatch(prevStep());
              handleSubmit();
            }}
          />
          <Button
            title='Next'
            onPress={() => {
              dispatch(nextStep());
              handleSubmit();
            }}
          />
        </>
      )}
    </Formik>
  );
};
