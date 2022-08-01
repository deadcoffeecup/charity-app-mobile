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
interface LoginFormValues {
  email: string;
  password: string;
}
const initialValues: LoginFormValues = { email: '', password: '' };

export const Login: FC<ReactNode> = () => {
  const { currentUser, login } = useAuth();

  const { handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: async (values) => {
      try {
        await login(values.email, values.password);
      } catch {
        console.warn('Login problem');
      }
    },
  });

  return (
    <Flex>
      <View>
        <Text>Log in</Text>
        <Form onSubmit={handleSubmit}>
          <Field
            onChange={() => handleChange('email')}
            keyboardType='email-address'
            placeholder='email'
          />
          <Field
            onChange={() => handleChange('password')}
            placeholder='password'
          />
          <Button onPress={() => handleSubmit} title='Login' />
        </Form>
      </View>
      <View>
        Need an account?
        <Button onPress={() => handleSubmit} title='Sign up!' />
      </View>
    </Flex>
  );
};
