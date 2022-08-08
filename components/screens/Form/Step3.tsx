import { Button, Text, TextInput } from '@react-native-material/core';
import { Field, Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';

import { Footer } from '../Main/Footer';
import { prevStep, nextStep } from '../../../app/form';
import { RootState } from '../../../app/store';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const initialValues = {};

export const Step3 = () => {
  const dispatch = useDispatch();
  const { targetOrganisation } = useSelector(
    (state: RootState) => state.formValues
  );

  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values) => {
          console.warn(values);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <RNPickerSelect
              onValueChange={(value) => console.log(value)}
              items={[
                { label: 'dolnośląskie', value: 'dolnośląskie' },
                { label: 'kujawsko-pomorskie', value: 'kujawsko-pomorskie' },
                { label: 'lubelskie', value: 'lubelskie' },
                { label: 'lubuskie', value: 'lubuskie' },
                { label: 'łódzkie', value: 'łódzkie' },
                { label: 'małopolskie', value: 'małopolskie' },
                { label: 'mazowieckie', value: 'mazowieckie' },
                { label: 'opolskie', value: 'opolskie' },
                { label: 'podkarpackie', value: 'podkarpackie' },
                { label: 'podlaskie', value: 'podlaskie' },
                { label: 'pomorskie', value: 'pomorskie' },
                { label: 'śląskie', value: 'śląskie' },
                { label: 'świętokrzyskie', value: 'świętokrzyskie' },
                { label: 'warmińsko-mazurskie', value: 'warmińsko-mazurskie' },
                { label: 'wielkopolskie', value: 'wielkopolskie' },
                { label: 'zachodniopomorskie', value: 'zachodniopomorskie' },
              ]}
            />
            <Text>Komu chcesz pomóc?</Text>
            <BouncyCheckbox
              textStyle={{
                textDecorationLine: 'none',
              }}
              text='dzieciom'
              onPress={() => {}}
            />
            <BouncyCheckbox
              textStyle={{
                textDecorationLine: 'none',
              }}
              text='samotnym matkom'
              onPress={() => {}}
            />
            <BouncyCheckbox
              textStyle={{
                textDecorationLine: 'none',
              }}
              text='bezdomnym'
              onPress={() => {}}
            />
            <BouncyCheckbox
              textStyle={{
                textDecorationLine: 'none',
              }}
              text='niepełnosprawnym'
              onPress={() => {}}
            />
            <BouncyCheckbox
              textStyle={{
                textDecorationLine: 'none',
              }}
              text='osobom starszym'
              onPress={() => {}}
            />
            <BouncyCheckbox
              textStyle={{
                textDecorationLine: 'none',
              }}
              text='bezrobotnym'
              onPress={() => {}}
            />
            <Text>Wpisz nazwę konkretnej organizacji (opcjonalnie)</Text>
            <TextInput
              onChangeText={handleChange('targetOrganisation')}
              onBlur={handleBlur('targetOrganisation')}
              value={targetOrganisation}
            />
            <Button
              title='Prev'
              onPress={() => {
                dispatch(prevStep());
                handleSubmit();
              }}
            />
            <Button
              title='Next'
              onPress={() => {
                dispatch(nextStep());
                handleSubmit();
              }}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};
