import { Button, Flex, Text, TextInput } from '@react-native-material/core';
import { Field, Formik } from 'formik';
import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';

import {
  setTargetOrganisation,
  setVoivodship,
  setTargetGroup,
  prevStep,
  nextStep,
} from '../../../app/form';

import { RootState } from '../../../app/store';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export const Step3 = () => {
  const dispatch = useDispatch();
  const { targetGroup, targetOrganisation, voivodship } = useSelector(
    (state: RootState) => state.formValues
  );

  const [selectValue, setSelectValue] = useState(voivodship);
  const [checkboxesValue, setCheckboxesValue] = useState(targetGroup);

  const handleCheck = (text: string) => {
    if (checkboxesValue.includes(text)) {
      let idx = checkboxesValue.indexOf(text);
      setCheckboxesValue((prev) => prev.splice(idx, 1));
    } else {
      setCheckboxesValue((prev) => [...prev, text]);
    }
  };

  const handleIsChecked = (text: string) => {
    return checkboxesValue.includes(text);
  };
  const checkboxesArr = [
    'dzieciom',
    'samotnym matkom',
    'bezdomnym',
    'niepełnosprawnym',
    'osobom starszym',
    'bezrobotnym',
  ];
  const voivodshipArr = [
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
  ];
  return (
    <>
      <Formik
        initialValues={{ targetOrganisation: targetOrganisation }}
        onSubmit={(values) => {
          dispatch(setTargetOrganisation({ value: values.targetOrganisation }));
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          <>
            <RNPickerSelect
              placeholder={
                selectValue.length === 0
                  ? { label: 'Wybierz wojewódźtwo', value: '' }
                  : {
                      label: `Wybrano ${selectValue} `,
                      value: selectValue,
                    }
              }
              onValueChange={(value) => setSelectValue(value)}
              items={voivodshipArr}
            />
            <Text>Komu chcesz pomóc?</Text>
            {checkboxesArr.map((el) => (
              <BouncyCheckbox
                key={el}
                isChecked={handleIsChecked(el) as boolean | undefined}
                textStyle={{
                  textDecorationLine: 'none',
                }}
                text={el}
                onPress={() => {
                  handleCheck(el);
                }}
              />
            ))}

            <Text>Wpisz nazwę konkretnej organizacji (opcjonalnie)</Text>

            <TextInput
              onChangeText={handleChange('targetOrganisation')}
              value={values.targetOrganisation}
            />

            <Flex m={10} justify='center' direction='row'>
              <Button
                title='Cofnij'
                onPress={() => {
                  handleSubmit();
                  dispatch(setTargetGroup({ value: checkboxesValue }));
                  dispatch(setVoivodship({ value: selectValue }));
                  dispatch(prevStep());
                }}
              />
              <Button
                title='Dalej'
                onPress={() => {
                  handleSubmit();
                  dispatch(setTargetGroup({ value: checkboxesValue }));
                  dispatch(setVoivodship({ value: selectValue }));
                  dispatch(nextStep());
                }}
              />
            </Flex>
          </>
        )}
      </Formik>
    </>
  );
};
