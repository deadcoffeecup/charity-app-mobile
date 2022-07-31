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
} from 'formik';

import { useAuth } from '../context/AuthContext';
interface LoginFormValues {
  email: string;
  password: string;
}
const initialValues: LoginFormValues = { email: '', password: '' };

export const Login: FC<ReactNode> = () => {
  //   const { login, currentUser } = useAuth();
  const [loginValues, setLoginValues] = useState<LoginFormValues>({
    email: '',
    password: '',
  });
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = () => {};

  // async function handleSubmit() {
  //   try {
  //     setError('');
  //     await login(emailRef.current.value, passwordRef.current.value);
  //   } catch {
  //     setError('failed to log in');
  //   }
  // }
  return (
    <Flex>
      <View>
        <Text>Log in</Text>
        <Form onSubmit={handleSubmit}>
          <Field
            ref={emailRef}
            keyboardType='email-address'
            placeholder='email'
          />
          <Field ref={passwordRef} placeholder='password' />
          <Button onPress={() => {}} title='Login' />
        </Form>
      </View>
      <View>
        Need an account?
        <Button onPress={handleSubmit} title='Sign up!' />
      </View>
    </Flex>
  );
};
