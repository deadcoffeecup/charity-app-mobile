import { Button, Flex, Text } from '@react-native-material/core';
import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import { nextStep, setStuff } from '../../../../app/form';
import { RootState } from '../../../../app/store';
import { stuffArr } from './consts';
import { StyledButton } from '../../../custom/Buttons/NavButton';
import { Field } from 'formik';
import { FormError } from '../../../custom/FormError';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import { useNavigation } from '@react-navigation/native';

export const Step1: FC = () => {
  const dispatch = useDispatch();
  const { stuff } = useSelector((state: RootState) => state.formValues);
  const [values, setValues] = useState(stuff);
  const [error, setError] = useState('');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
      navigation.navigate('Step2' as keyof RootStackParamList);
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
      {!!error.length && <FormError error={error} />}
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
