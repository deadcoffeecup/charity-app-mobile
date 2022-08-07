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

import { useAuth } from '../../context/AuthContext';
import {
  Link,
  useNavigation,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PropsType } from '../../App';

interface LoginFormValues {
  email: string;
  password: string;
}
const initialValues: LoginFormValues = { email: '', password: '' };

export const Login: FC<PropsType> = ({ navigation }) => {
  const { login } = useAuth();

  return (
    <Flex style={{ top: 50 }}>
      <View>
        <Text>Log in</Text>
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
        <Text> Need an account?</Text>
        <Button
          onPress={() => navigation.navigate('Signup')}
          title='Sign up!'
        />
      </View>
    </Flex>
  );
};
