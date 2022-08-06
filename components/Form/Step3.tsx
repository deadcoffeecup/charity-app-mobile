import { Text } from '@react-native-material/core';
import { Field } from 'formik';
import React from 'react';
import { View } from 'react-native';

export const Step3 = () => {
  return (
    <View>
      <Text>Checked</Text>
      <Field type='checkbox' name='checked' value='dzieciom' />
      <Text>dzieciom</Text>
      <Field type='checkbox' name='checked' value='samotnym matkom' />
      <Text>samotnym matkom</Text>
      <Field type='checkbox' name='checked' value='bezdomnym' />
      <Text>bezdomnym</Text>
      <Field type='checkbox' name='checked' value='niepełnosprawnym' />
      <Text>niepełnosprawnym</Text>
      <Field type='checkbox' name='checked' value='osobom starszym' />
      <Text>osobom starszym</Text>
      <Field type='checkbox' name='checked' value='bezrobotnym' />
      <Text>bezrobotnym</Text>
    </View>
  );
};
