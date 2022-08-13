import { Button, Flex, Text, TextInput } from '@react-native-material/core';
import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
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
import { NavPropsType } from '../../../App';

import { useAuth } from '../../../context/AuthContext';
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

export const Signup: FC<NavPropsType> = ({ navigation }) => {
  const { currentUser, signup } = useAuth();
  useEffect(() => {
    !!currentUser && navigation.navigate('Main');
  }, [currentUser]);

  return (
    <Flex>
      <View>
        <Text>Rejestracja</Text>
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
              <Text>E-mail</Text>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Text>Hasło</Text>

              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <Text>Powtórz hasło</Text>
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
        <Text>Masz już konto?</Text>
        <Button
          onPress={() => navigation.navigate('Login')}
          title='Zaloguj się'
        />
        <Button onPress={() => navigation.navigate('Main')} title='Powrót' />
      </View>
    </Flex>
  );
};