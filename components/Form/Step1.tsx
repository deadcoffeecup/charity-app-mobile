import { Button, Text } from '@react-native-material/core';
import { Field, Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';

import { prevStep, nextStep } from '../../app/form';

export const Step1 = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        console.warn(values);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <Text>Checked</Text>
          <Field
            type='checkbox'
            name='checked'
            value='ubrania, które nadają się do ponownego użycia'
          />
          <Text>ubrania, które nadają się do ponownego użycia</Text>
          <Field type='checkbox' name='checked' value='ubrania do wyrzucenia' />
          <Text>ubrania do wyrzucenia</Text>
          <Field type='checkbox' name='checked' value='zabawki' />
          <Text>zabawki</Text>
          <Field type='checkbox' name='checked' value='ksiażki' />
          <Text>ksiażki</Text>
          <Field type='checkbox' name='checked' value='inne' />
          <Text>inne</Text>
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
        </View>
      )}
    </Formik>
  );
};
