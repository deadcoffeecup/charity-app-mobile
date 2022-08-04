import { Text } from '@react-native-material/core';
import { Field } from 'formik';
import React from 'react';
import { View } from 'react-native';

export const Step1 = () => {
  return (
    <View>
      <Text>Checked</Text>
      <Field
        type='checkbox'
        name='checked'
        value='ubrania, które nadają się do ponownego użycia'
      />
      <Text>ubrania, które nadają się do ponownego użycia</Text>
      <Field type='checkbox' name='checked' value='ubrania do wyrzucenia' />
      <Text>ubrania do wyrzucenia</Text>
      <Field type='checkbox' name='checked' value='zabawki' />
      <Text>zabawki</Text>
      <Field type='checkbox' name='checked' value='ksiażki' />
      <Text>ksiażki</Text>
      <Field type='checkbox' name='checked' value='inne' />
      <Text>inne</Text>
    </View>
  );
};
