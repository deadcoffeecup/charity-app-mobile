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

import { useAuth } from '../../../context/AuthContext';
import { NavPropsType } from '../../../App';
import { NavButton, StyledButton } from '../../custom/Buttons/NavButton';

interface LoginFormValues {
  email: string;
  password: string;
}
const initialValues: LoginFormValues = { email: '', password: '' };

export const Login: FC<NavPropsType> = ({ navigation }) => {
  const { login } = useAuth();

  return (
    <View style={{ top: 50 }}>
      <Flex items='center'>
        <Text>Logowanie</Text>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            try {
              await login(values.email, values.password);
              navigation.navigate('Main');
            } catch {
              console.warn('Login problem');
            }
          }}
        >
          {({ handleChange, handleSubmit, handleBlur, values }) => (
            <View style={{ width: '80%' }}>
              <Text>E-mail</Text>
              <Field
                color={'cadetblue'}
                name='email'
                id='email'
                as={TextInput}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Text>Hasło</Text>
              <Field
                color={'cadetblue'}
                name='password'
                id='password'
                as={TextInput}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />

              <StyledButton
                onPress={() => handleSubmit()}
                title='Zaloguj się'
              />
            </View>
          )}
        </Formik>
      </Flex>
      <Flex m={10} direction='column' items='center' justify='center'>
        <Text> Nie masz jeszcze konta?</Text>
        <NavButton title='Zarejestruj się!' screen='Signup' />
      </Flex>
    </View>
  );
};
