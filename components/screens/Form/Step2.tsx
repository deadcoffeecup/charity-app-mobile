import { Button, Flex } from '@react-native-material/core';
import React, { useState } from 'react';
import { View } from 'react-native';

import RNPickerSelect from 'react-native-picker-select';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, prevStep, setNumberOfBags } from '../../../app/form';
import { RootState } from '../../../app/store';

export const Step2 = () => {
  const dispatch = useDispatch();
  const { numberOfBags } = useSelector((state: RootState) => state.formValues);

  const [values, setValues] = useState(numberOfBags);
  return (
    <Flex>
      <RNPickerSelect
        placeholder={
          values === 0
            ? { label: 'Wybierz ilość worków', value: 0 }
            : { label: `Wybrano ${values} worków`, value: values }
        }
        onValueChange={(value) => setValues(value)}
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
          { label: 'Więcej niż 10', value: 'więcej niż 10' },
        ]}
      />
      <Flex m={20} justify='center' direction='row'>
        <Button
          title='Cofnij'
          onPress={() => {
            dispatch(prevStep());
            dispatch(setNumberOfBags({ value: values }));
          }}
        />
        <Button
          title='Dalej'
          onPress={() => {
            dispatch(nextStep());
            dispatch(setNumberOfBags({ value: values }));
          }}
        />
      </Flex>
    </Flex>
  );
};
