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

  const { values, handleChange, handleSubmit } = useFormik({
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
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
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
              <Button onPress={() => handleSubmit()} title='Login' />
            </View>
          )}
        </Formik>
      </View>
      <View>
        Need an account?
        <Button onPress={() => handleSubmit()} title='Sign up!' />
      </View>
    </Flex>
  );
};
