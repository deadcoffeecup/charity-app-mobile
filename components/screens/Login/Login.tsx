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
import { NavButton } from '../../custom/NavButton';

interface LoginFormValues {
  email: string;
  password: string;
}
const initialValues: LoginFormValues = { email: '', password: '' };

export const Login: FC<NavPropsType> = ({ navigation }) => {
  const { login } = useAuth();

  return (
    <Flex style={{ top: 50 }}>
      <View>
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
              <Button onPress={() => handleSubmit()} title='Login' />
            </View>
          )}
        </Formik>
      </View>
      <View>
        <Text> Nie masz jeszcze konta?</Text>
        <NavButton
          navigation={navigation}
          title='Zarejestruj się!'
          screen='Signup'
        />
        {/* <Button
          onPress={() => navigation.navigate('Signup')}
          title='Zarejestruj się!'
        /> */}
      </View>
    </Flex>
  );
};
