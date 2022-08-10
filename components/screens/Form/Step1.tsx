import { Button, Flex, Text } from '@react-native-material/core';
import { Field, Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { prevStep, nextStep, setStuff } from '../../../app/form';
import { initialState } from '../../../app/form';
const initialValues = initialState.stuff;

export const Step1 = () => {
  const dispatch = useDispatch();
  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          // dispatch(setStuff(values))
          console.log(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <Text>Rzeczy do oddania</Text>
            <BouncyCheckbox
              textStyle={{
                textDecorationLine: 'none',
              }}
              text='ubrania, które nadają się do ponownego użycia'
              onPress={() => {}}
            />
            <BouncyCheckbox
              textStyle={{
                textDecorationLine: 'none',
              }}
              text='ubrania do wyrzucenia'
              onPress={() => {}}
            />
            <BouncyCheckbox
              textStyle={{
                textDecorationLine: 'none',
              }}
              text='zabawki'
              onPress={() => {}}
            />
            <BouncyCheckbox
              textStyle={{
                textDecorationLine: 'none',
              }}
              text='ksiażki'
              onPress={() => {}}
            />
            <BouncyCheckbox
              textStyle={{
                textDecorationLine: 'none',
              }}
              text='inne'
              onPress={() => {}}
            />
            <Flex m={10} justify='center' direction='row'>
              <Button
                title='Next'
                onPress={() => {
                  dispatch(nextStep());
                  handleSubmit();
                }}
              />
            </Flex>
          </View>
        )}
      </Formik>
    </View>
  );
};
