import { Button, Flex, Text } from '@react-native-material/core';
import React, { useEffect, useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { useDispatch, useSelector } from 'react-redux';

import { nextStep, prevStep, setNumberOfBags } from '../../../../app/form';
import { RootState } from '../../../../app/store';
import { bagsPickerArr } from './consts';

export const Step2 = () => {
  const dispatch = useDispatch();
  const { numberOfBags } = useSelector((state: RootState) => state.formValues);
  const [values, setValues] = useState(numberOfBags);
  const [error, setError] = useState('');

  useEffect(() => {
    dispatch(setNumberOfBags({ value: values }));
  }, [values]);

  const validate = (mode: string) => {
    if (values === 0) {
      setError('Wybierz ilość worków zanim przejdziesz dalej');
    } else {
      if (mode === 'back') {
        dispatch(prevStep());
      } else {
        dispatch(nextStep());
      }
      setError('');
    }
  };

  return (
    <Flex>
      <RNPickerSelect
        placeholder={
          values === 0
            ? { label: 'Wybierz ilość worków', value: 0 }
            : { label: `Wybrano ${values} worków`, value: values }
        }
        onValueChange={(value) => setValues(value)}
        items={bagsPickerArr}
      />
      {!!error.length && <Text style={{ color: 'red' }}>{error}</Text>}
      <Flex m={20} justify='center' direction='row'>
        <Button
          title='Cofnij'
          onPress={() => {
            validate('back');
          }}
        />
        <Button
          title='Dalej'
          onPress={() => {
            validate('next');
          }}
        />
      </Flex>
    </Flex>
  );
};
