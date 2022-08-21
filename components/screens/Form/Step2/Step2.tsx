import { Flex, Text } from '@react-native-material/core';
import React, { useEffect, useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { useDispatch, useSelector } from 'react-redux';

import { nextStep, prevStep, setNumberOfBags } from '../../../../app/form';
import { RootState } from '../../../../app/store';
import { StyledButton } from '../../../custom/Buttons/NavButton';
import { PickerIcon } from '../../../custom/Icons';
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
      if (mode === 'next') {
        dispatch(nextStep());
      }
      setError('');
    }
  };

  return (
    <Flex m={40}>
      <RNPickerSelect
        Icon={PickerIcon}
        style={{
          inputIOS: { fontSize: 20 },
          inputAndroid: { fontSize: 20 },
          placeholder: { color: '#3339' },
        }}
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
        <StyledButton
          title='Cofnij'
          onPress={() => {
            dispatch(prevStep());
          }}
        />
        <StyledButton
          title='Dalej'
          onPress={() => {
            validate('next');
          }}
        />
      </Flex>
    </Flex>
  );
};
