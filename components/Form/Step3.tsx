import { Button, Text, TextInput } from '@react-native-material/core';
import { Field, Formik } from 'formik';
import React from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';

import { Footer } from '../Main/Footer';
import { prevStep, nextStep } from '../../app/form';

const initialValues = {};

export const Step3 = () => {
  const dispatch = useDispatch();
  return (
    <>
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
            <Field type='checkbox' name='targetGroup' value='dzieciom' />
            <Text>dzieciom</Text>
            <Field type='checkbox' name='targetGroup' value='samotnym matkom' />
            <Text>samotnym matkom</Text>
            <Field type='checkbox' name='targetGroup' value='bezdomnym' />
            <Text>bezdomnym</Text>
            <Field
              type='checkbox'
              name='targetGroup'
              value='niepełnosprawnym'
            />
            <Text>niepełnosprawnym</Text>
            <Field type='checkbox' name='targetGroup' value='osobom starszym' />
            <Text>osobom starszym</Text>
            <Field type='checkbox' name='targetGroup' value='bezrobotnym' />
            <Text>bezrobotnym</Text>
            <TextInput
              onChangeText={handleChange('targetOrganisation')}
              onBlur={handleBlur('targetOrganisation')}
              value={}
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
      <Footer />
    </>
  );
};
