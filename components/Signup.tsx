import { Button, Flex, Text, TextInput } from '@react-native-material/core';
import React, { FC, ReactNode, useRef, useState } from 'react';
import { View } from 'react-native';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  prepareDataForValidation,
  useFormik,
} from 'formik';

import { useAuth } from '../context/AuthContext';
interface SignupFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}
const initialValues: SignupFormValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

export const Signup: FC<ReactNode> = () => {
  const { currentUser, signup } = useAuth();

  return (
    <Flex>
      <View>
        <Text>Sign up</Text>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            try {
              await signup(values.email, values.password);
            } catch {
              console.warn('sign up problem');
            }
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <TextInput
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
              />
              <Button onPress={() => handleSubmit()} title='signup' />
            </View>
          )}
        </Formik>
      </View>
      <View>
        Already have an account?
        <Button onPress={() => {}} title='Log in!' />
      </View>
    </Flex>
  );
};
