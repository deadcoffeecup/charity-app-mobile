import { Button, Flex } from '@react-native-material/core';
import React from 'react';
import { View } from 'react-native';

import RNPickerSelect from 'react-native-picker-select';
import { useDispatch } from 'react-redux';
import { nextStep, prevStep } from '../../../app/form';

export const Step2 = () => {
  const dispatch = useDispatch();
  return (
    <Flex>
      <RNPickerSelect
        onValueChange={(value) => alert(value)}
        items={[
          { label: '1', value: 1 },
          { label: '2', value: 2 },
          { label: '3', value: 3 },
          { label: '4', value: 4 },
          { label: '5', value: 5 },
          { label: '6', value: 6 },
          { label: '7', value: 7 },
          { label: '8', value: 8 },
          { label: '9', value: 9 },
          { label: '10', value: 10 },
          { label: '>10', value: '>10' },
        ]}
      />
      <Flex m={20} justify='center' direction='row'>
        <Button title='Cofnij' onPress={() => dispatch(prevStep())} />
        <Button title='Dalej' onPress={() => dispatch(nextStep())} />
      </Flex>
    </Flex>
  );
};
