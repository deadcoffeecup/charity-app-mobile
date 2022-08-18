import { Button, Flex, Text, TextInput } from '@react-native-material/core';
import React, { FC, useEffect } from 'react';
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
import { NavButton, StyledButton } from '../../custom/NavButton';
import { FormError } from '../../custom/FormError';
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

  function validateEmail(email: string) {
    let error;
    if (!email) {
      error = 'Uzupełnij pole email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      error = 'Niepoprawny adres email';
    }
    return error;
  }
  function validatePasswords(password: string, confirmPassword: string) {
    let error;
    if (!password && !confirmPassword) {
      error = 'Uzupełnij pole hasła';
    } else if (password !== confirmPassword) {
      error = 'Hasła musza byc takie same';
    }
    return error;
  }

  return (
    <View>
      <Flex items='center'>
        <Text>Rejestracja</Text>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            console.warn(values);
            try {
              await signup(values.email, values.password);
            } catch {
              console.warn('sign up problem');
            }
          }}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <View style={{ width: '80%' }}>
              <Text>E-mail</Text>
              <Field
                color={'cadetblue'}
                as={TextInput}
                name={'email'}
                validate={validateEmail}
                onChangeText={handleChange('email')}
                value={values.email}
              />
              {!!errors.email && !!touched.email && (
                <FormError error={errors.email} />
              )}
              <Text>Hasło</Text>
              <Field
                color={'cadetblue'}
                as={TextInput}
                name={'password'}
                onChangeText={handleChange('password')}
                value={values.password}
                secureTextEntry
                validate={() =>
                  validatePasswords(values.password, values.confirmPassword)
                }
              />
              <Text>Powtórz hasło</Text>
              <Field
                color={'cadetblue'}
                as={TextInput}
                name={'confirmPassword'}
                validate={() =>
                  validatePasswords(values.password, values.confirmPassword)
                }
                onChangeText={handleChange('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry
              />
              {!!errors.password && !!touched.password && (
                <FormError error={errors.password} />
              )}

              <StyledButton
                onPress={() => handleSubmit()}
                title='Zarejestruj się'
              />
            </View>
          )}
        </Formik>
      </Flex>
      <Flex m={10} direction='column' items='center' justify='center'>
        <Text>Masz już konto?</Text>
        <Flex m={10} direction='column' justify='center'>
          <NavButton screen='Login' title='Zaloguj się' />
          <NavButton screen='Main' title='Powrót' />
        </Flex>
      </Flex>
    </View>
  );
};
