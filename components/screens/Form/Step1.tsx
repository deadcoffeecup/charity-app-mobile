import { Button, Flex, Text } from '@react-native-material/core';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { nextStep, setStuff } from '../../../app/form';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store';
import { Footer } from '../Main/Footer';

export const Step1 = () => {
  const dispatch = useDispatch();
  const { stuff } = useSelector((state: RootState) => state.formValues);
  const [values, setValues] = useState(stuff);
  const [error, setError] = useState('');

  const handleCheck = (text: string) => {
    if (values.includes(text)) {
      let idx = values.indexOf(text);
      setValues((prev) => prev.splice(idx, 1));
    } else {
      setValues((prev) => [...prev, text]);
    }
  };
  const handleIsChecked = (text: string) => {
    return values.includes(text);
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
  }, [values]);

  return (
    <>
      <Text>Rzeczy do oddania</Text>
      <BouncyCheckbox
        isChecked={
          handleIsChecked('ubrania, które nadają się do ponownego użycia') as
            | boolean
            | undefined
        }
        textStyle={{
          textDecorationLine: 'none',
        }}
        text='ubrania, które nadają się '
        onPress={() => {
          handleCheck('ubrania, które nadają się do ponownego użycia');
        }}
      />
      <BouncyCheckbox
        isChecked={
          handleIsChecked('ubrania do wyrzucenia') as boolean | undefined
        }
        textStyle={{
          textDecorationLine: 'none',
        }}
        text='ubrania do wyrzucenia'
        onPress={() => {
          handleCheck('ubrania do wyrzucenia');
        }}
      />
      <BouncyCheckbox
        isChecked={handleIsChecked('zabawki') as boolean | undefined}
        textStyle={{
          textDecorationLine: 'none',
        }}
        text='zabawki'
        onPress={() => {
          handleCheck('zabawki');
        }}
      />
      <BouncyCheckbox
        isChecked={handleIsChecked('książki') as boolean | undefined}
        textStyle={{
          textDecorationLine: 'none',
        }}
        text='ksiażki'
        onPress={() => {
          handleCheck('książki');
        }}
      />
      <BouncyCheckbox
        isChecked={handleIsChecked('inne') as boolean | undefined}
        textStyle={{
          textDecorationLine: 'none',
        }}
        text='inne'
        onPress={() => {
          handleCheck('inne');
        }}
      />
      {!!error.length && <Text style={{ color: 'red' }}>{error}</Text>}
      <Flex m={10} justify='center' direction='row'>
        <Button
          title='Dalej'
          onPress={() => {
            validate();
          }}
        />
      </Flex>
    </>
  );
};
