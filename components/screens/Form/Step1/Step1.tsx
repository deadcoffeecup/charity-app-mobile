import { Button, Flex, Text } from '@react-native-material/core';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import { nextStep, setStuff } from '../../../../app/form';
import { RootState } from '../../../../app/store';
import { stuffArr } from './consts';
import { StyledButton } from '../../../custom/NavButton';
import { Field } from 'formik';

export const Step1: FC = () => {
  const dispatch = useDispatch();
  const { stuff } = useSelector((state: RootState) => state.formValues);
  const [values, setValues] = useState(stuff);
  const [error, setError] = useState('');

  const handleCheck = (item: string) => {
    if (values.includes(item)) {
      let idx = values.indexOf(item);
      setValues((prev) => prev.filter((el, id) => el[id] !== el[idx]));
    } else {
      setValues((prev) => [...prev, item]);
    }
  };
  const handleInitialValue = (item: string) => {
    return values.includes(item);
  };
  const validate = () => {
    if (values.length === 0) {
      setError('zaznacz przynajmniej jedną kategorię');
    } else {
      setError('');
      dispatch(nextStep());
    }
  };
  useEffect(() => {
    dispatch(setStuff({ value: values }));
    if (values.length !== 0) {
      setError('');
    }
  }, [values]);

  return (
    <>
      <Text>Rzeczy do oddania</Text>
      {stuffArr.map((item) => (
        <BouncyCheckbox
          key={item}
          isChecked={handleInitialValue(item) as boolean | undefined}
          textStyle={{
            textDecorationLine: 'none',
          }}
          text={item}
          onPress={() => {
            handleCheck(item);
          }}
        />
      ))}
      {!!error.length && <Text style={{ color: 'red' }}>{error}</Text>}
      <Flex m={10} justify='center' direction='row'>
        <StyledButton
          title='Dalej'
          onPress={() => {
            validate();
          }}
        />
      </Flex>
    </>
  );
};
